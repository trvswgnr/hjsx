await updateVersion();
await runTests();
await commitAndPush();

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

async function updateVersion() {
    const file = Bun.file("package.json");
    const contents = await file.text();
    const pkg = JSON.parse(contents);
    const version = pkg.version;
    const [major, minor, patch] = version.split(".");
    const new_version = `${major}.${minor}.${Number(patch) + 1}`;
    pkg.version = new_version;
    const writer = file.writer();
    writer.write(JSON.stringify(pkg, null, 4));
    await writer.end();
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
