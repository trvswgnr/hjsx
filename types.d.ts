/// <reference lib="dom" />

declare module "react/jsx-runtime";

declare namespace PropTypes {
    const nominalTypeHack: unique symbol;
    type ValidationMap<T> = { [K in keyof T]?: Validator<T[K]> };
    interface Validator<T> {
        (
            props: { [key: string]: any },
            propName: string,
            componentName: string,
            location: string,
            propFullName: string,
        ): Error | null;
        [nominalTypeHack]?: {
            type: T;
        } | undefined;
    }
}

declare namespace JSX {
    type ElementType = string | JSXElementConstructor<any>;
    interface Element extends JSXElement<any, any> {}
    type IntrinsicElements = {
        [K in keyof HTMLElementTagNameMap]: Attributes<HTMLElementTagNameMap[K]>;
    }
    type Attributes<T> = { [K in keyof T]?: T[K] };

    type JSXElementConstructor<P> =
        | ((
            props: P,
            /**
             * @deprecated https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-stateless-function-components
             */
            deprecatedLegacyContext?: any,
        ) => Node)
        | (new (
            props: P,
            /**
             * @deprecated https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods
             */
            deprecatedLegacyContext?: any,
        ) => Component<any, any>);

    type Node =
        | JSXElement
        | string
        | number
        | Iterable<Node>
        | boolean
        | null
        | undefined;

    interface JSXElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }

    interface Component<P = {}, S = {}, SS = any> {
        [x: string]: any;
    }

    type FC<P = {}> = FunctionComponent<P>;

    interface FunctionComponent<P = {}> {
        (props: P, context?: any): Node;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    type WeakValidationMap<T> = {
        [K in keyof T]?: null extends T[K] ? Validator<T[K] | null | undefined>
        : undefined extends T[K] ? Validator<T[K] | null | undefined>
        : Validator<T[K]>;
    };

    type ValidationMap<T> = PropTypes.ValidationMap<T>;

    type Validator<T> = PropTypes.Validator<T>;

    interface ElementClass extends Component<any> {
        render(): Node;
    }

    interface ElementAttributesProperty {
        props: {};
    }

    interface ElementChildrenAttribute {
        children: {};
    }

    type LibraryManagedAttributes<C, P> = C extends { defaultProps: infer D } ? D & P : P;

    type Key = string | number | bigint;
    interface IntrinsicAttributes {
        key?: Key | null | undefined;
    }
}

type PropsWithChildren<P = unknown> = P & { children?: JSX.Node | undefined };