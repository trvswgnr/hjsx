export { normalizeAttributeName } from "./normalize-attribute-name.ts";

const escapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

const regex = new RegExp(`[${Object.keys(escapeMap).join('')}]`, 'g');

export function escapeHtml(str: string) {
    let html = '';
    let matchIndex: number | undefined;
    let lastIndex = 0;
    let char: string;
    while (true) {
        matchIndex = regex.exec(str)?.index;
        if (matchIndex === undefined) break;
        html += str.slice(lastIndex, matchIndex);
        char = str[matchIndex];
        html += escapeMap[char];
        lastIndex = matchIndex + 1;
    }
    html += str.slice(lastIndex);
    return html
}

export function uuid(): string {
    const parts = [
        random_alphanumeric(8),
        random_alphanumeric(4),
        random_alphanumeric(4),
        random_alphanumeric(4),
        random_alphanumeric(12),
    ];
    return parts.join("-");
}

function random_alphanumeric(len: number): string {
    let str = "";
    for (let i = 0; i < len; i++) {
        str += Math.floor(Math.random() * 36).toString(36);
    }
    return str;
}

export function isPrimitive(value: unknown): value is string | number | boolean {
    return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
}

export function isNullish(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

export function isIterable(value: unknown): value is Iterable<any> {
    return Symbol.iterator in Object(value) && typeof value !== 'string';
}

export function isObject(value: unknown): value is Record<PropertyKey, unknown> {
    return typeof value === 'object' && value !== null;
}

export function isClassConstructor(fn: unknown): fn is new (...args: any[]) => any {
    return typeof fn === "function" && fn.toString().trim().startsWith("class");
}

export function dangerouslySetInnerHTML(value: unknown): string {
    if (typeof value !== "object" || value === null) {
        throw new Error("dangerouslySetInnerHTML must be an object");
    }
    if (!("__html" in value)) {
        throw new Error("dangerouslySetInnerHTML must have an __html property");
    }
    return String(value.__html);
}

export function handleStyle(value: unknown): string {
    if (typeof value !== "object" || value === null) {
        throw new Error("style must be an object");
    }
    return Object.entries(value).map(([key, value]) => `${toKebabCase(key)}: ${value}`).join("; ");
}

function toKebabCase(str: string) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}
