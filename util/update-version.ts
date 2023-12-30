// increments the patch version number in package.json

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
