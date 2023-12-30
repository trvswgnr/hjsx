# hjsx

> [!WARNING]  
> This project is still in early development and is not ready for use.

JSX is great for templating, but pulling in React can be overkill, and even when just using the types it can be confusing. **hjsx** (Hypertext + JavaScript Extensible Markup Language) aims to provide a simple way to use JSX on the server by rendering it to HTML.

It includes modified types for the JSX elements, with all event handlers removed, and a `render` method that returns a string.

To install dependencies:

```bash
bun install
```

Check out the demo:

```bash
bun run serve.ts
```
