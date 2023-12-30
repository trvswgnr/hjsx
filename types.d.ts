/// <reference lib="dom" />

declare namespace JSX {
    type AttributesWithoutEvents<T> = Attributes<Omit<T, `on${string}`>>
    type IntrinsicElements = {
        [K in keyof HTMLElementTagNameMap]: AttributesWithoutEvents<HTMLElementTagNameMap[K]>;
    } & {
            [K in keyof SVGElementTagNameMap]: AttributesWithoutEvents<SVGElementTagNameMap[K]>;
        };

    interface Element {
        type: string | Function;
        props?: { [key: string]: unknown };
        key?: string | null;
    }

    type SelfClosingElements = "area" | "base" | "br" | "col" | "embed" | "hr" | "img" | "input" | "link" | "meta" | "source" | "track" | "wbr";

    type Node =
        | JSX.Element
        | string
        | number
        | JSX.Element & { children?: JSX.Node }
        | Iterable<JSX.Node>
        | boolean
        | null
        | undefined;

    type HtmlElement<T extends keyof HTMLElementTagNameMap> = T extends SelfClosingElements ? IntrinsicElements[T] : IntrinsicElements[T] & { children?: JSX.Node };
}

type Attributes<T> = { [K in keyof T]?: T[K] } & { class?: string };
type PropsWithChildren<P = unknown> = P & { children?: JSX.Node };

