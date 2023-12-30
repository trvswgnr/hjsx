import {
    uuid,
    escapeHtml,
    normalizeAttributeName,
    isNullish,
    isPrimitive,
    dangerouslySetInnerHTML,
    handleStyle,
    isIterable,
} from "./util";

export function h(
    type: JSX.Element["type"],
    props?: JSX.Element["props"],
    children?: JSX.Node,
): PropsWithChildren<JSX.Element> {
    return { type, props, children };
}

type RenderProps = {
    type: JSX.Element["type"];
    props?: JSX.Element["props"];
    children?: JSX.Node;
};
export function renderToString({ type, props, children }: RenderProps): string {
    if (typeof type === "function") {
        return renderToString(type({ ...props, children }));
    }
    props = props ?? {};
    const jsxId = uuid();
    props["jsx-id"] = jsxId;
    const propsArr: string[] = [];
    let innerHTML: string | null = null;
    let normalizedKey: string;
    let value: unknown;
    let script = "";
    for (let key in props) {
        value = props[key] as unknown;
        normalizedKey = normalizeAttributeName(key);
        if (key === "dangerouslySetInnerHTML") {
            innerHTML = dangerouslySetInnerHTML(value);
        }
        if (key === "style") {
            value = handleStyle(value);
        }
        if (value === true) {
            // handle boolean attributes
            propsArr.push(normalizedKey);
        } else if (value !== false && value != null) {
            // handle normal attributes
            propsArr.push(`${normalizedKey}="${escapeHtml(String(value))}"`);
        }
    }
    const propsString = propsArr.length > 0 ? ` ${propsArr.join(" ")}` : "";

    let childrenString = innerHTML ?? renderChildren({ type, props, children });

    // handle self-closing tags
    const selfClosingTags = [
        "area",
        "base",
        "br",
        "col",
        "command",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
    ];
    if (selfClosingTags.includes(type)) {
        return `<${type}${propsString} />`;
    }
    return `<${type}${propsString}>${childrenString}</${type}>`;
}

export const Fragment = ({ children }: PropsWithChildren<JSX.Element>) =>
    children;

function renderChildren({
    type,
    props,
    children,
}: PropsWithChildren<JSX.Element>): string {
    children = Array.isArray(children) ? children : [children];
    let childrenString = "";
    for (let child of children) {
        if (isPrimitive(child)) {
            childrenString += escapeHtml(String(child));
            continue;
        }
        if (isNullish(child)) {
            continue;
        }
        if (isIterable(child)) {
            childrenString += renderToString({ type, props, children: child });
            continue;
        }
        childrenString += renderToString({
            type: child.type,
            props: child.props,
            children: "children" in child ? child.children : undefined,
        });
    }
    return childrenString;
}
