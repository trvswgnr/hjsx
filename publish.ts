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
await runTests();
await commitAndPush();

if (oldVersion !== newVersion) {
    await publish();
    console.log(`\n${colors.green("published!")} v${oldVersion} -> v${newVersion}`);
} else {
    console.log(`\n${colors.gray("(not published)")} v${oldVersion} == v${newVersion}`);
}

async function build() {
    console.log("building...");
    const { exited } = Bun.spawn(["bun", "run", "build"]);
    const exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("build failed");
    }
}

async function publish() {
    console.log("publishing to npm...");
    const { exited } = Bun.spawn(["npm", "publish"], quietSpawnOptions);
    const exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("publish failed");
    }
}

async function commitAndPush(): Promise<void> {
    let process = Bun.spawn(["git", "add", "-A"], quietSpawnOptions);
    let exitCode = await process.exited;
    if (exitCode !== 0) {
        throw new Error("git add failed");
    }
    process = Bun.spawn(
        ["git", "commit", "-m", "'update version and test results badge'"],
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
        throw new Error("git push failed");
    }
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

async function runTests() {
    console.log("running tests...");
    const { exited } = Bun.spawn("bun test".split(" "), quietSpawnOptions);
    const exitCode = await exited;
    const text = exitCode === 0 ? "passing" : "failing";
    const color = exitCode === 0 ? "green" : "red";
    return updateReadmeTestsBadge(text, color);
}

async function updateReadmeTestsBadge(text: string, color: string) {
    console.log("updating README.md tests badge...");
    const link = `![tests](https://img.shields.io/badge/tests-${text}-${color}?style=for-the-badge)`;
    const file = Bun.file("README.md");
    const contents = await file.text();
    const updated = contents.replace(/!\[tests\].+/, link);
    const writer = file.writer();
    writer.write(updated);
    await writer.end();
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
