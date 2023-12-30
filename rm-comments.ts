const file = Bun.file("./react.d.ts");
console.log(`Input size: ${file.size} bytes`);
const content = await file.text();
let output = removeJSDocComments(content);
output = removeLineComments(output);
const bytesWritten = await Bun.write("./react.d.ts", output);
console.log(`Output size: ${bytesWritten} bytes`);

function removeJSDocComments(input: string): string {
    const jsDocCommentPattern = /\/\*\*[\s\S]*?\*\//gm;
    return input.replace(jsDocCommentPattern, '');
}

function removeLineComments(input: string): string {
    const lineCommentPattern = /\/\/.*/gm;
    return input.replace(lineCommentPattern, '');
}
