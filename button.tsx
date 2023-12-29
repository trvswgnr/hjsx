/// <reference lib="dom" />

export default function Button({ children, ...props }: PropsWithChildren<JSX.Attributes<HTMLButtonElement>>) {
    return <button {...props}>{children}</button>;
}
