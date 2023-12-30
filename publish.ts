/**
 * This script is used to do the following:
 * 1. Build the project
 * 2. Update the version in package.json
 * 3. Run tests
 * 4. Commit and push changes
 */

import { colors } from "./util";
import { parseArgs } from "node:util";

const options = {
    patch: {
        type: "boolean",
        short: "p",
    },
    minor: {
        type: "boolean",
        short: "m",
    },
    major: {
        type: "boolean",
        short: "M",
    },
} as const;
const args = process.argv.slice(2);
const config = { args, options };
const quietSpawnOptions = {
    stdout: "pipe",
    stderr: "pipe",
} as const;

await build();
const [oldVersion, newVersion] = await updateVersion();
const testsPassed = await runTests();
const readmeUpdated = await updateReadmeTestsBadge(testsPassed);
const changedFiles = await getChangedFiles();
await commitAndPush(changedFiles);
await publish(oldVersion, newVersion);

async function getChangedFiles(): Promise<string[]> {
    console.log("getting changed files...");
    const process = Bun.spawn(["git", "diff", "--name-only"], quietSpawnOptions);
    const stdout = await Bun.readableStreamToText(process.stdout);
    const changed = stdout.split("\n").filter(Boolean);
    if (changed.length) {
        console.log("changed files:");
        changed.forEach((file) => console.log(`-  ${file}`));
    }
    return changed;
}

async function build() {
    console.log("building...");
    const { exited } = Bun.spawn(["bun", "run", "build"]);
    const exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("build failed");
    }
}

async function publish(oldVersion: SemVer, newVersion: SemVer) {
    if (oldVersion === newVersion) {
        console.log(`not publishing to npm because version is still ${newVersion}`);
        return;
    }
    console.log("publishing to npm...");
    const process = Bun.spawn(["npm", "publish"], quietSpawnOptions);
    const exitCode = await process.exited;
    if (exitCode !== 0) {
        const stderr = await Bun.readableStreamToText(process.stderr);
        throw new Error(`npm publish failed: ${stderr}`);
    }
    console.log(
        `${colors.green("published to npm!")} 🎉 ${colors.gray(oldVersion)} → ${colors.gray(
            newVersion,
        )}`,
    );
}

async function commitAndPush(changedFiles: string[]): Promise<void> {
    if (!changedFiles.length) {
        console.log("no changes to commit");
        return;
    }
    console.log("committing and pushing...");
    let process = Bun.spawn(["git", "add", "."], quietSpawnOptions);
    let exitCode = await process.exited;
    if (exitCode !== 0) {
        const stderr = await Bun.readableStreamToText(process.stderr);
        throw new Error(`git add failed: ${stderr}`);
    }
    process = Bun.spawn(
        ["git", "commit", "-m", "'updated, tested'"],
        quietSpawnOptions,
    );
    exitCode = await process.exited;
    if (exitCode !== 0) {
        const stderr = await Bun.readableStreamToText(process.stderr);
        throw new Error(`git commit failed: ${stderr}`);
    }
    process = Bun.spawn(["git", "push"], quietSpawnOptions);
    exitCode = await process.exited;
    if (exitCode !== 0) {
        const stderr = await Bun.readableStreamToText(process.stderr);
        throw new Error(`git push failed: ${stderr}`);
    }
    console.log("committed and pushed to github");
}

async function updateVersion(): Promise<[SemVer, SemVer]> {
    console.log("updating version...");
    const parsed = parseArgs(config);
    const file = Bun.file("package.json");
    const pkg = await file.json<Package>();
    const version = pkg.version;
    const newVersion = getNewVersion(version, parsed.values);
    pkg.version = newVersion;
    const writer = file.writer();
    writer.write(JSON.stringify(pkg, null, 4));
    await writer.end();
    return [version, newVersion];
}

function getNewVersion(version: SemVer, args: ParsedArgs["values"]): SemVer {
    const [major, minor, patch] = version.split(".").map(Number);
    if (args.major) return `${major + 1}.0.0`;
    if (args.minor) return `${major}.${minor + 1}.0`;
    if (args.patch) return `${major}.${minor}.${patch + 1}`;
    return version;
}

async function runTests(): Promise<boolean> {
    console.log("running tests...");
    const process = Bun.spawn("bun test".split(" "), quietSpawnOptions);
    const exitCode = await process.exited;
    const passed = exitCode === 0;
    let message = passed ? colors.green("tests passed!") : colors.red("tests failed!");
    console.log(message);
    return passed;
}

async function updateReadmeTestsBadge(testsPassed: boolean): Promise<boolean> {
    const color = testsPassed ? "green" : "red";
    const text = testsPassed ? "passing" : "failing";
    console.log("updating README.md tests badge...");
    const link = `![tests](https://img.shields.io/badge/tests-${text}-${color}?style=for-the-badge)`;
    const file = Bun.file("README.md");
    const contents = await file.text();
    const updated = contents.replace(/!\[tests\].+/, link);
    if (contents === updated) {
        console.log("README.md tests badge is already up to date");
        return false;
    }
    const writer = file.writer();
    writer.write(updated);
    await writer.end();
    return true;
}

type Package = {
    name: string;
    version: SemVer;
    module: string;
    main: string;
    type: string;
    types: string;
    scripts: JsonRecord;
    devDependencies: JsonRecord;
    peerDependencies: JsonRecord;
};

type SemVer = `${number}.${number}.${number}`;
type JsonRecord = Record<string, string>;
type ParsedArgs = ReturnType<typeof parseArgs<typeof config>>;
