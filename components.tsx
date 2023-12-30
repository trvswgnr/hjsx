import "./hjsx";
type Props = hjsx.PropsWithChildren<hjsx.ButtonHTMLAttributes>

export function Button({ children, ...props }: Props) {
    return (
        <>
            <button {...props}>{children}</button>
        </>
    );
}

export const Page = (
    <main className="tr4vvy-r00lz">
        <Button className="nice" type="button">Click me</Button>
    </main>
);
