import { sjsx, sjsxFragment } from "./sjsx";

export function Button({ children, ...props }: sjsx.PropsWithChildren<sjsx.ButtonHTMLAttributes<HTMLButtonElement>>) {
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
