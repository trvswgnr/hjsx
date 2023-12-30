import {
    escapeHtml,
    normalizeAttributeName,
    isNullish,
    isPrimitive,
    dangerouslySetInnerHTML,
    handleStyle,
    isIterable,
    isClassConstructor,
    isObject,
} from "./util";

const SELF_CLOSING_TAGS = [
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

export function hjsx(
    type: hjsx.Element["type"],
    props?: Record<PropertyKey, unknown>,
    children?: hjsx.Node,
) {
    return {
        type,
        props,
        children,
        render() {
            return renderToString(this);
        },
        $$typeof: Symbol.for("hjsx.element"),
        key: null,
        ref: null,
        _owner: null,
    };
}

export function fragment({ children }: hjsx.RenderProps) {
    return children;
}

// Refactored to use functional programming style
export const renderToString = (component?: unknown): string => {
    if (isPrimitive(component)) return escapeHtml(String(component));
    if (isNullish(component)) return "";
    if (isIterable(component)) return renderChildren({ children: component });
    if (!isObject(component)) return "";
    if (!("children" in component)) return renderChildren({ children: component });
    validateElement(component);

    let { type, props, children } = component;
    if (typeof type === "function") {
        const componentInstance = isClassConstructor(type)
            ? new type({ ...props, children })
            : type({ ...props, children });
        return renderToString(componentInstance);
    }

    const innerHTML = props.dangerouslySetInnerHTML
        ? dangerouslySetInnerHTML(props.dangerouslySetInnerHTML)
        : null;
    const propsString = Object.entries(props)
        .filter(
            ([key, value]) => key !== "dangerouslySetInnerHTML" && value !== false && value != null,
        )
        .map(([key, value]) => {
            const normalizedKey = normalizeAttributeName(key);
            const normalizedValue = escapeHtml(
                String(key === "style" ? handleStyle(value) : value),
            );
            return value === true ? normalizedKey : `${normalizedKey}="${normalizedValue}"`;
        })
        .join(" ");

    const childrenString = innerHTML ?? renderChildren({ children });

    if (typeof type !== "string") {
        return renderToString({ type, props, children });
    }

    return SELF_CLOSING_TAGS.includes(type)
        ? `<${type} ${propsString} />`
        : `<${type} ${propsString}>${childrenString}</${type}>`;
};

// Refactored to use functional programming style
const renderChildren = (args: unknown): string => {
    if (isNullish(args)) return "";
    if (isPrimitive(args)) return escapeHtml(String(args));
    if (!isObject(args)) return "";
    const { children } = args;
    const childrenArray = Array.isArray(children) ? children : [children];
    return childrenArray
        .filter((child) => !isNullish(child))
        .map(renderToString)
        .join("");
};

function validateElement(
    element: unknown,
): asserts element is hjsx.PropsWithChildren<hjsx.Element> {
    if (!isObject(element)) {
        throw new Error("Element must be an object");
    }
    if (!("type" in element)) {
        throw new Error("Element must have a type");
    }
    if (!("props" in element)) {
        throw new Error("Element must have props");
    }
}

// set globals
globalThis.hjsx = hjsx;
globalThis.fragment = fragment;
