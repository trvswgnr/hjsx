import {
    uuid,
    escapeHtml,
    normalizeAttributeName,
    isNullish,
    isPrimitive,
    dangerouslySetInnerHTML,
    handleStyle,
    isIterable,
    isClassConstructor,
} from "./util";

export function h(
    type: React.ReactElement["type"],
    props?: React.ReactElement["props"],
    children?: React.ReactNode,
): RenderProps {
    return { type, props, children };
}

export function renderToString(component?: React.ReactNode | React.PropsWithChildren<React.ReactNode>): string {
    if (isPrimitive(component)) {
        return escapeHtml(String(component));
    }
    if (isNullish(component)) {
        return "";
    }
    if (isIterable(component)) {
        return renderChildren({ children: component });
    }
    if (!("children" in component)) {
        return renderChildren({ children: component });
    }
    let { type, props, children } = component;
    if (typeof type === "function") {
        if (isClassConstructor(type)) {
            const component = new type({ ...props, children });
            return renderToString(component);
        }
        return renderToString(type({ ...props, children }));
    }
    props = props ?? {};
    const jsxId = uuid();
    props["jsx-id"] = jsxId;
    const propsArr: string[] = [];
    let innerHTML: string | null = null;
    let normalizedKey: string;
    let value: unknown;
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

    let childrenString = innerHTML ?? renderChildren({ children });

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

export const Fragment = ({ children }: RenderProps) => children;

function renderChildren({ children }: { children: React.ReactNode }): string {
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
            childrenString += renderChildren({ children: child });
            continue;
        }
        childrenString += renderToString(child);
    }
    return childrenString;
}
