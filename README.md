# hjsx

![npm](https://img.shields.io/npm/v/hjsx?style=flat-square)
![tests](https://img.shields.io/badge/tests-passing-green?style=for-the-badge)

> [!WARNING]  
> This project is still in early development and is not ready for use.

JSX is great for templating, but pulling in React can be overkill, and even when just using the types it can be confusing. **hjsx** (Hypertext + JavaScript Extensible Markup Language) aims to provide a simple way to use JSX on the server by rendering it to HTML.

It includes modified types for the JSX elements, with all event handlers removed, and a `render` method that returns a string.

It _is_ currently available on [`npm`](https://www.npmjs.com/package/hjsx), but I wouldn't recommend using it yet.

## Usage

First, install the package:

```bash
bun i hjsx
```

Then you'll need to update your tsconfig.json to use the `react-jsx` compiler option, and set the `jsxFactory` and `jsxFragmentFactory` options to `hjsx` and `hjsx.fragment` respectively:

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxFactory": "hjsx",
        "jsxFragmentFactory": "hjsx.fragment"
    }
}
```

Now you can use JSX in your code:

```tsx
import type { hjsx } from "hjsx";
type MyComponentProps = hjsx.Attributes & {};
export function MyComponent(props: MyComponentProps) {
    return (
        <>
            <div {...props}>
                <h1>c00l b34nz</h1>
            </div>
        </>
    );
}
```

Check out the demo:

```bash
bun install
bun run examples/serve.ts
```

## Contributing

Contributions are welcome! Please help me. This is a cry for help.
