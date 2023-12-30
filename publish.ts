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

await build();
const [oldVersion, newVersion] = await updateVersion();
await runTests();
await commitAndPush();
await publish();

console.log(`published! v${oldVersion} -> v${newVersion}`);

async function build() {
    const { exited } = Bun.spawn(["bun", "run", "build"]);
    const exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("build failed");
    }
}

async function publish() {
    const { exited } = Bun.spawn(["npm", "publish"]);
    const exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("publish failed");
    }
}

async function commitAndPush() {
    let exited = Bun.spawn(["git", "add", "-A"]).exited;
    let exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("git add failed");
    }
    exited = Bun.spawn(["git", "commit", "-m", "'update version and test results badge'"]).exited;
    exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("git commit failed");
    }
    exited = Bun.spawn(["git", "push"]).exited;
    exitCode = await exited;
    if (exitCode !== 0) {
        throw new Error("git push failed");
    }
}

async function updateVersion(): Promise<[SemVer, SemVer]> {
    const parsed = parseArgs(config);
    const file = Bun.file("package.json");
    const pkg = await file.json<Package>();
    const version = pkg.version;
    const newVersion = getNewVersion(version, parsed);
    pkg.version = newVersion;
    const writer = file.writer();
    writer.write(JSON.stringify(pkg, null, 4));
    await writer.end();
    return [version, newVersion];
}

function getNewVersion(version: SemVer, parsedArgs: ParsedArgs): SemVer {
    const { values } = parsedArgs;
    const [major, minor, patch] = version.split(".").map(Number);
    if (values.major) return `${major + 1}.0.0`;
    if (values.minor) return `${major}.${minor + 1}.0`;
    return `${major}.${minor}.${patch + 1}` as SemVer;
}

async function runTests() {
    const { exited } = Bun.spawn("bun test".split(" "));
    const exitCode = await exited;
    const text = exitCode === 0 ? "passing" : "failing";
    const color = exitCode === 0 ? "green" : "red";
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
