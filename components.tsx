import { h, Fragment } from "./jsx";

export function Button({ children, ...props }: PropsWithChildren<JSX.HtmlElement<"button">>) {
    return (
        <>
            <button {...props}>{children}</button>
        </>
    );
}

export function Page() {
    return (
        <main class="hello">
            <Button class="hi" type="button">Click me</Button>
        </main>
    );
}
