import { h, Fragment } from "./jsx";

export function Button({ children, ...props }: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
    return (
        <>
            <button {...props}>{children}</button>
        </>
    );
}

export function Page() {
    return (
        <main className="hello">
            <Button className="hi" type="button">Click me</Button>
        </main>
    );
}
