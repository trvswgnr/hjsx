const file = Bun.file("./react.d.ts");
console.log(`Input size: ${file.size} bytes`);
const content = await file.text();
const output = [content]
    .map(removeBlockComments)
    .map(removeLineComments)
    .map(removeEmptyLines)
    .join("");
const bytesWritten = await Bun.write("./types.d.ts", output);
console.log(`Output size: ${bytesWritten} bytes`);

function removeBlockComments(input: string): string {
    const multiLineCommentPattern = /\/\*\*?[\s\S]*?\*\//gm;
    return input.replace(multiLineCommentPattern, "");
}

function removeLineComments(input: string): string {
    const lineCommentPattern = /\/\/.*/gm;
    return input.replace(lineCommentPattern, "");
}

function removeEmptyLines(input: string): string {
    const emptyLinePattern = /^\s*[\r\n]/gm;
    return input.replace(emptyLinePattern, "");
}
