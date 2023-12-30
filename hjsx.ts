import * as u from "./util";

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
    if (u.isPrimitive(component)) return u.escapeHtml(String(component));
    if (u.isNullish(component)) return "";
    if (u.isIterable(component)) return renderChildren({ children: component });
    if (!u.isObject(component)) return "";
    if (!("children" in component)) return renderChildren({ children: component });
    validateElement(component);

    let { type, props, children } = component;
    props = props ?? {};
    if (typeof type === "function") {
        const componentInstance = u.isClassConstructor(type)
            ? new type({ ...props, children })
            : type({ ...props, children });
        return renderToString(componentInstance);
    }

    const innerHTML = props.dangerouslySetInnerHTML
        ? u.dangerouslySetInnerHTML(props.dangerouslySetInnerHTML)
        : null;
    const propsString = Object.entries(props)
        .filter(
            ([key, value]) =>
                key !== "u.dangerouslySetInnerHTML" && value !== false && value != null,
        )
        .map(([key, value]) => {
            const normalizedKey = u.normalizeAttributeName(key);
            const normalizedValue = u.escapeHtml(
                String(key === "style" ? u.handleStyle(value) : value),
            );
            return value === true ? normalizedKey : `${normalizedKey}="${normalizedValue}"`;
        })
        .join(" ");

    const childrenString = innerHTML ?? renderChildren({ children });

    if (typeof type !== "string") {
        return renderToString({ type, props, children });
    }

    return u.SELF_CLOSING_TAGS.includes(type)
        ? `<${type} ${propsString} />`
        : `<${type} ${propsString}>${childrenString}</${type}>`;
};

// Refactored to use functional programming style
const renderChildren = (args: unknown): string => {
    if (u.isNullish(args)) return "";
    if (u.isPrimitive(args)) return u.escapeHtml(String(args));
    if (!u.isObject(args)) return "";
    const { children } = args;
    const childrenArray = Array.isArray(children) ? children : [children];
    return childrenArray
        .filter((child) => !u.isNullish(child))
        .map(renderToString)
        .join("");
};

function validateElement(
    element: unknown,
): asserts element is hjsx.PropsWithChildren<hjsx.Element> {
    if (!u.isObject(element)) {
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
globalThis.hjsx = Object.assign(hjsx, { fragment });

