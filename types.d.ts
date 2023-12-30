declare global {
    export type hjsx = typeof hjsx;
    export function hjsx(
        type: hjsx.Element["type"],
        props?: hjsx.Element["props"],
        children?: hjsx.Node,
    ): hjsx.Element;
    export function fragment(props: hjsx.RenderProps): hjsx.Node;
    export namespace hjsx {
        type RenderProps = {
            type: hjsx.Element["type"];
            props?: hjsx.Element["props"];
            children?: hjsx.Node;
        };
        type FunctionComponent<P = {}> = (
            props?: P & { children?: Node },
        ) => Node & { render: () => string };
        type PropsWithChildren<P = unknown> = P & { children?: Node | undefined };
        interface SVGLineElementAttributes<T> extends SVGProps<T> {}
        interface SVGTextElementAttributes<T> extends SVGProps<T> {}
        interface SVGProps<T> extends SVGAttributes, ClassAttributes<T> {}
        type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;
        interface AllHTMLAttributes extends HTMLAttributes {
            accept?: string | undefined;
            acceptCharset?: string | undefined;
            action?: string | undefined;
            allowFullScreen?: boolean | undefined;
            allowTransparency?: boolean | undefined;
            alt?: string | undefined;
            as?: string | undefined;
            async?: boolean | undefined;
            autoComplete?: string | undefined;
            autoPlay?: boolean | undefined;
            capture?: boolean | "user" | "environment" | undefined;
            cellPadding?: number | string | undefined;
            cellSpacing?: number | string | undefined;
            charSet?: string | undefined;
            challenge?: string | undefined;
            checked?: boolean | undefined;
            cite?: string | undefined;
            classID?: string | undefined;
            cols?: number | undefined;
            colSpan?: number | undefined;
            controls?: boolean | undefined;
            coords?: string | undefined;
            crossOrigin?: CrossOrigin;
            data?: string | undefined;
            dateTime?: string | undefined;
            default?: boolean | undefined;
            defer?: boolean | undefined;
            disabled?: boolean | undefined;
            download?: any;
            encType?: string | undefined;
            form?: string | undefined;
            formAction?: string | undefined;
            formEncType?: string | undefined;
            formMethod?: string | undefined;
            formNoValidate?: boolean | undefined;
            formTarget?: string | undefined;
            frameBorder?: number | string | undefined;
            headers?: string | undefined;
            height?: number | string | undefined;
            high?: number | undefined;
            href?: string | undefined;
            hrefLang?: string | undefined;
            htmlFor?: string | undefined;
            httpEquiv?: string | undefined;
            integrity?: string | undefined;
            keyParams?: string | undefined;
            keyType?: string | undefined;
            kind?: string | undefined;
            label?: string | undefined;
            list?: string | undefined;
            loop?: boolean | undefined;
            low?: number | undefined;
            manifest?: string | undefined;
            marginHeight?: number | undefined;
            marginWidth?: number | undefined;
            max?: number | string | undefined;
            maxLength?: number | undefined;
            media?: string | undefined;
            mediaGroup?: string | undefined;
            method?: string | undefined;
            min?: number | string | undefined;
            minLength?: number | undefined;
            multiple?: boolean | undefined;
            muted?: boolean | undefined;
            name?: string | undefined;
            noValidate?: boolean | undefined;
            open?: boolean | undefined;
            optimum?: number | undefined;
            pattern?: string | undefined;
            placeholder?: string | undefined;
            playsInline?: boolean | undefined;
            poster?: string | undefined;
            preload?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            reversed?: boolean | undefined;
            rows?: number | undefined;
            rowSpan?: number | undefined;
            sandbox?: string | undefined;
            scope?: string | undefined;
            scoped?: boolean | undefined;
            scrolling?: string | undefined;
            seamless?: boolean | undefined;
            selected?: boolean | undefined;
            shape?: string | undefined;
            size?: number | undefined;
            sizes?: string | undefined;
            span?: number | undefined;
            src?: string | undefined;
            srcDoc?: string | undefined;
            srcLang?: string | undefined;
            srcSet?: string | undefined;
            start?: number | undefined;
            step?: number | string | undefined;
            summary?: string | undefined;
            target?: string | undefined;
            type?: string | undefined;
            useMap?: string | undefined;
            value?: string | readonly string[] | number | undefined;
            width?: number | string | undefined;
            wmode?: string | undefined;
            wrap?: string | undefined;
        }
        type HTMLAttributeReferrerPolicy =
            | ""
            | "no-referrer"
            | "no-referrer-when-downgrade"
            | "origin"
            | "origin-when-cross-origin"
            | "same-origin"
            | "strict-origin"
            | "strict-origin-when-cross-origin"
            | "unsafe-url";
        type HTMLAttributeAnchorTarget = "_self" | "_blank" | "_parent" | "_top" | (string & {});
        interface AnchorHTMLAttributes extends HTMLAttributes {
            download?: any;
            href?: string | undefined;
            hrefLang?: string | undefined;
            media?: string | undefined;
            ping?: string | undefined;
            target?: HTMLAttributeAnchorTarget | undefined;
            type?: string | undefined;
            referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        }
        interface AudioHTMLAttributes extends MediaHTMLAttributes {}
        interface AreaHTMLAttributes extends HTMLAttributes {
            alt?: string | undefined;
            coords?: string | undefined;
            download?: any;
            href?: string | undefined;
            hrefLang?: string | undefined;
            media?: string | undefined;
            referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
            shape?: string | undefined;
            target?: string | undefined;
        }
        interface BaseHTMLAttributes extends HTMLAttributes {
            href?: string | undefined;
            target?: string | undefined;
        }
        interface BlockquoteHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
        }
        interface ButtonHTMLAttributes extends HTMLAttributes {
            disabled?: boolean | undefined;
            form?: string | undefined;
            formAction?: string | undefined;
            formEncType?: string | undefined;
            formMethod?: string | undefined;
            formNoValidate?: boolean | undefined;
            formTarget?: string | undefined;
            name?: string | undefined;
            type?: "submit" | "reset" | "button" | undefined;
            value?: string | readonly string[] | number | undefined;
        }
        interface CanvasHTMLAttributes extends HTMLAttributes {
            height?: number | string | undefined;
            width?: number | string | undefined;
        }
        interface ColHTMLAttributes extends HTMLAttributes {
            span?: number | undefined;
            width?: number | string | undefined;
        }
        interface ColgroupHTMLAttributes extends HTMLAttributes {
            span?: number | undefined;
        }
        interface DataHTMLAttributes extends HTMLAttributes {
            value?: string | readonly string[] | number | undefined;
        }
        interface DetailsHTMLAttributes extends HTMLAttributes {
            open?: boolean | undefined;
            name?: string | undefined;
        }
        interface DelHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
            dateTime?: string | undefined;
        }
        interface DialogHTMLAttributes extends HTMLAttributes {
            open?: boolean | undefined;
        }
        interface EmbedHTMLAttributes extends HTMLAttributes {
            height?: number | string | undefined;
            src?: string | undefined;
            type?: string | undefined;
            width?: number | string | undefined;
        }
        interface FieldsetHTMLAttributes extends HTMLAttributes {
            disabled?: boolean | undefined;
            form?: string | undefined;
            name?: string | undefined;
        }
        interface FormHTMLAttributes extends HTMLAttributes {
            acceptCharset?: string | undefined;
            action?: string | undefined;
            autoComplete?: string | undefined;
            encType?: string | undefined;
            method?: string | undefined;
            name?: string | undefined;
            noValidate?: boolean | undefined;
            target?: string | undefined;
        }
        interface HtmlHTMLAttributes extends HTMLAttributes {
            manifest?: string | undefined;
        }
        interface IframeHTMLAttributes extends HTMLAttributes {
            allow?: string | undefined;
            allowFullScreen?: boolean | undefined;
            allowTransparency?: boolean | undefined;
            frameBorder?: number | string | undefined;
            height?: number | string | undefined;
            loading?: "eager" | "lazy" | undefined;
            marginHeight?: number | undefined;
            marginWidth?: number | undefined;
            name?: string | undefined;
            referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
            sandbox?: string | undefined;
            scrolling?: string | undefined;
            seamless?: boolean | undefined;
            src?: string | undefined;
            srcDoc?: string | undefined;
            width?: number | string | undefined;
        }
        interface ImgHTMLAttributes extends HTMLAttributes {
            alt?: string | undefined;
            crossOrigin?: CrossOrigin;
            decoding?: "async" | "auto" | "sync" | undefined;
            height?: number | string | undefined;
            loading?: "eager" | "lazy" | undefined;
            referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
            sizes?: string | undefined;
            src?: string | undefined;
            srcSet?: string | undefined;
            useMap?: string | undefined;
            width?: number | string | undefined;
        }
        interface InsHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
            dateTime?: string | undefined;
        }
        type HTMLInputTypeAttribute =
            | "button"
            | "checkbox"
            | "color"
            | "date"
            | "datetime-local"
            | "email"
            | "file"
            | "hidden"
            | "image"
            | "month"
            | "number"
            | "password"
            | "radio"
            | "range"
            | "reset"
            | "search"
            | "submit"
            | "tel"
            | "text"
            | "time"
            | "url"
            | "week"
            | (string & {});
        interface InputHTMLAttributes extends HTMLAttributes {
            accept?: string | undefined;
            alt?: string | undefined;
            autoComplete?: string | undefined;
            capture?: boolean | "user" | "environment" | undefined;
            checked?: boolean | undefined;
            disabled?: boolean | undefined;
            enterKeyHint?:
                | "enter"
                | "done"
                | "go"
                | "next"
                | "previous"
                | "search"
                | "send"
                | undefined;
            form?: string | undefined;
            formAction?: string | undefined;
            formEncType?: string | undefined;
            formMethod?: string | undefined;
            formNoValidate?: boolean | undefined;
            formTarget?: string | undefined;
            height?: number | string | undefined;
            list?: string | undefined;
            max?: number | string | undefined;
            maxLength?: number | undefined;
            min?: number | string | undefined;
            minLength?: number | undefined;
            multiple?: boolean | undefined;
            name?: string | undefined;
            pattern?: string | undefined;
            placeholder?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            size?: number | undefined;
            src?: string | undefined;
            step?: number | string | undefined;
            type?: HTMLInputTypeAttribute | undefined;
            value?: string | readonly string[] | number | undefined;
            width?: number | string | undefined;
        }
        interface KeygenHTMLAttributes extends HTMLAttributes {
            challenge?: string | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            keyType?: string | undefined;
            keyParams?: string | undefined;
            name?: string | undefined;
        }
        interface LabelHTMLAttributes extends HTMLAttributes {
            form?: string | undefined;
            htmlFor?: string | undefined;
        }
        interface LiHTMLAttributes extends HTMLAttributes {
            value?: string | readonly string[] | number | undefined;
        }
        interface LinkHTMLAttributes extends HTMLAttributes {
            as?: string | undefined;
            crossOrigin?: CrossOrigin;
            fetchPriority?: "high" | "low" | "auto";
            href?: string | undefined;
            hrefLang?: string | undefined;
            integrity?: string | undefined;
            media?: string | undefined;
            imageSrcSet?: string | undefined;
            imageSizes?: string | undefined;
            referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
            sizes?: string | undefined;
            type?: string | undefined;
            charSet?: string | undefined;
        }
        interface MapHTMLAttributes extends HTMLAttributes {
            name?: string | undefined;
        }
        interface MenuHTMLAttributes extends HTMLAttributes {
            type?: string | undefined;
        }
        interface MediaHTMLAttributes extends HTMLAttributes {
            autoPlay?: boolean | undefined;
            controls?: boolean | undefined;
            controlsList?: string | undefined;
            crossOrigin?: CrossOrigin;
            loop?: boolean | undefined;
            mediaGroup?: string | undefined;
            muted?: boolean | undefined;
            playsInline?: boolean | undefined;
            preload?: string | undefined;
            src?: string | undefined;
        }
        interface MetaHTMLAttributes extends HTMLAttributes {
            charSet?: string | undefined;
            httpEquiv?: string | undefined;
            name?: string | undefined;
            media?: string | undefined;
            content?: string | undefined;
        }
        interface MeterHTMLAttributes extends HTMLAttributes {
            form?: string | undefined;
            high?: number | undefined;
            low?: number | undefined;
            max?: number | string | undefined;
            min?: number | string | undefined;
            optimum?: number | undefined;
            value?: string | readonly string[] | number | undefined;
        }
        interface QuoteHTMLAttributes extends HTMLAttributes {
            cite?: string | undefined;
        }
        interface ObjectHTMLAttributes extends HTMLAttributes {
            classID?: string | undefined;
            data?: string | undefined;
            form?: string | undefined;
            height?: number | string | undefined;
            name?: string | undefined;
            type?: string | undefined;
            useMap?: string | undefined;
            width?: number | string | undefined;
            wmode?: string | undefined;
        }
        interface OlHTMLAttributes extends HTMLAttributes {
            reversed?: boolean | undefined;
            start?: number | undefined;
            type?: "1" | "a" | "A" | "i" | "I" | undefined;
        }
        interface OptgroupHTMLAttributes extends HTMLAttributes {
            disabled?: boolean | undefined;
            label?: string | undefined;
        }
        interface OptionHTMLAttributes extends HTMLAttributes {
            disabled?: boolean | undefined;
            label?: string | undefined;
            selected?: boolean | undefined;
            value?: string | readonly string[] | number | undefined;
        }
        interface OutputHTMLAttributes extends HTMLAttributes {
            form?: string | undefined;
            htmlFor?: string | undefined;
            name?: string | undefined;
        }
        interface ParamHTMLAttributes extends HTMLAttributes {
            name?: string | undefined;
            value?: string | readonly string[] | number | undefined;
        }
        interface ProgressHTMLAttributes extends HTMLAttributes {
            max?: number | string | undefined;
            value?: string | readonly string[] | number | undefined;
        }
        interface SlotHTMLAttributes extends HTMLAttributes {
            name?: string | undefined;
        }
        interface ScriptHTMLAttributes extends HTMLAttributes {
            async?: boolean | undefined;
            charSet?: string | undefined;
            crossOrigin?: CrossOrigin;
            defer?: boolean | undefined;
            integrity?: string | undefined;
            noModule?: boolean | undefined;
            referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
            src?: string | undefined;
            type?: string | undefined;
        }
        interface SelectHTMLAttributes extends HTMLAttributes {
            autoComplete?: string | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            multiple?: boolean | undefined;
            name?: string | undefined;
            required?: boolean | undefined;
            size?: number | undefined;
            value?: string | readonly string[] | number | undefined;
        }
        interface SourceHTMLAttributes extends HTMLAttributes {
            height?: number | string | undefined;
            media?: string | undefined;
            sizes?: string | undefined;
            src?: string | undefined;
            srcSet?: string | undefined;
            type?: string | undefined;
            width?: number | string | undefined;
        }
        interface StyleHTMLAttributes extends HTMLAttributes {
            media?: string | undefined;
            scoped?: boolean | undefined;
            type?: string | undefined;
        }
        interface TableHTMLAttributes extends HTMLAttributes {
            align?: "left" | "center" | "right" | undefined;
            bgcolor?: string | undefined;
            border?: number | undefined;
            cellPadding?: number | string | undefined;
            cellSpacing?: number | string | undefined;
            frame?: boolean | undefined;
            rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
            summary?: string | undefined;
            width?: number | string | undefined;
        }
        interface TextareaHTMLAttributes extends HTMLAttributes {
            autoComplete?: string | undefined;
            cols?: number | undefined;
            dirName?: string | undefined;
            disabled?: boolean | undefined;
            form?: string | undefined;
            maxLength?: number | undefined;
            minLength?: number | undefined;
            name?: string | undefined;
            placeholder?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            rows?: number | undefined;
            value?: string | readonly string[] | number | undefined;
            wrap?: string | undefined;
        }
        interface TdHTMLAttributes extends HTMLAttributes {
            align?: "left" | "center" | "right" | "justify" | "char" | undefined;
            colSpan?: number | undefined;
            headers?: string | undefined;
            rowSpan?: number | undefined;
            scope?: string | undefined;
            abbr?: string | undefined;
            height?: number | string | undefined;
            width?: number | string | undefined;
            valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
        }
        interface ThHTMLAttributes extends HTMLAttributes {
            align?: "left" | "center" | "right" | "justify" | "char" | undefined;
            colSpan?: number | undefined;
            headers?: string | undefined;
            rowSpan?: number | undefined;
            scope?: string | undefined;
            abbr?: string | undefined;
        }
        interface TimeHTMLAttributes extends HTMLAttributes {
            dateTime?: string | undefined;
        }
        interface TrackHTMLAttributes extends HTMLAttributes {
            default?: boolean | undefined;
            kind?: string | undefined;
            label?: string | undefined;
            src?: string | undefined;
            srcLang?: string | undefined;
        }
        interface VideoHTMLAttributes extends MediaHTMLAttributes {
            height?: number | string | undefined;
            playsInline?: boolean | undefined;
            poster?: string | undefined;
            width?: number | string | undefined;
            disablePictureInPicture?: boolean | undefined;
            disableRemotePlayback?: boolean | undefined;
        }
        interface SVGAttributes extends AriaAttributes, DOMAttributes {
            suppressHydrationWarning?: boolean | undefined;
            className?: string | undefined;
            color?: string | undefined;
            height?: number | string | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            max?: number | string | undefined;
            media?: string | undefined;
            method?: string | undefined;
            min?: number | string | undefined;
            name?: string | undefined;
            style?: CSSProperties | undefined;
            target?: string | undefined;
            type?: string | undefined;
            width?: number | string | undefined;
            role?: AriaRole | undefined;
            tabIndex?: number | undefined;
            crossOrigin?: CrossOrigin;
            accentHeight?: number | string | undefined;
            accumulate?: "none" | "sum" | undefined;
            additive?: "replace" | "sum" | undefined;
            alignmentBaseline?:
                | "auto"
                | "baseline"
                | "before-edge"
                | "text-before-edge"
                | "middle"
                | "central"
                | "after-edge"
                | "text-after-edge"
                | "ideographic"
                | "alphabetic"
                | "hanging"
                | "mathematical"
                | "inherit"
                | undefined;
            allowReorder?: "no" | "yes" | undefined;
            alphabetic?: number | string | undefined;
            amplitude?: number | string | undefined;
            arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
            ascent?: number | string | undefined;
            attributeName?: string | undefined;
            attributeType?: string | undefined;
            autoReverse?: Booleanish | undefined;
            azimuth?: number | string | undefined;
            baseFrequency?: number | string | undefined;
            baselineShift?: number | string | undefined;
            baseProfile?: number | string | undefined;
            bbox?: number | string | undefined;
            begin?: number | string | undefined;
            bias?: number | string | undefined;
            by?: number | string | undefined;
            calcMode?: number | string | undefined;
            capHeight?: number | string | undefined;
            clip?: number | string | undefined;
            clipPath?: string | undefined;
            clipPathUnits?: number | string | undefined;
            clipRule?: number | string | undefined;
            colorInterpolation?: number | string | undefined;
            colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
            colorProfile?: number | string | undefined;
            colorRendering?: number | string | undefined;
            contentScriptType?: number | string | undefined;
            contentStyleType?: number | string | undefined;
            cursor?: number | string | undefined;
            cx?: number | string | undefined;
            cy?: number | string | undefined;
            d?: string | undefined;
            decelerate?: number | string | undefined;
            descent?: number | string | undefined;
            diffuseConstant?: number | string | undefined;
            direction?: number | string | undefined;
            display?: number | string | undefined;
            divisor?: number | string | undefined;
            dominantBaseline?: number | string | undefined;
            dur?: number | string | undefined;
            dx?: number | string | undefined;
            dy?: number | string | undefined;
            edgeMode?: number | string | undefined;
            elevation?: number | string | undefined;
            enableBackground?: number | string | undefined;
            end?: number | string | undefined;
            exponent?: number | string | undefined;
            externalResourcesRequired?: Booleanish | undefined;
            fill?: string | undefined;
            fillOpacity?: number | string | undefined;
            fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
            filter?: string | undefined;
            filterRes?: number | string | undefined;
            filterUnits?: number | string | undefined;
            floodColor?: number | string | undefined;
            floodOpacity?: number | string | undefined;
            focusable?: Booleanish | "auto" | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | string | undefined;
            fontSizeAdjust?: number | string | undefined;
            fontStretch?: number | string | undefined;
            fontStyle?: number | string | undefined;
            fontVariant?: number | string | undefined;
            fontWeight?: number | string | undefined;
            format?: number | string | undefined;
            fr?: number | string | undefined;
            from?: number | string | undefined;
            fx?: number | string | undefined;
            fy?: number | string | undefined;
            g1?: number | string | undefined;
            g2?: number | string | undefined;
            glyphName?: number | string | undefined;
            glyphOrientationHorizontal?: number | string | undefined;
            glyphOrientationVertical?: number | string | undefined;
            glyphRef?: number | string | undefined;
            gradientTransform?: string | undefined;
            gradientUnits?: string | undefined;
            hanging?: number | string | undefined;
            horizAdvX?: number | string | undefined;
            horizOriginX?: number | string | undefined;
            href?: string | undefined;
            ideographic?: number | string | undefined;
            imageRendering?: number | string | undefined;
            in2?: number | string | undefined;
            in?: string | undefined;
            intercept?: number | string | undefined;
            k1?: number | string | undefined;
            k2?: number | string | undefined;
            k3?: number | string | undefined;
            k4?: number | string | undefined;
            k?: number | string | undefined;
            kernelMatrix?: number | string | undefined;
            kernelUnitLength?: number | string | undefined;
            kerning?: number | string | undefined;
            keyPoints?: number | string | undefined;
            keySplines?: number | string | undefined;
            keyTimes?: number | string | undefined;
            lengthAdjust?: number | string | undefined;
            letterSpacing?: number | string | undefined;
            lightingColor?: number | string | undefined;
            limitingConeAngle?: number | string | undefined;
            local?: number | string | undefined;
            markerEnd?: string | undefined;
            markerHeight?: number | string | undefined;
            markerMid?: string | undefined;
            markerStart?: string | undefined;
            markerUnits?: number | string | undefined;
            markerWidth?: number | string | undefined;
            mask?: string | undefined;
            maskContentUnits?: number | string | undefined;
            maskUnits?: number | string | undefined;
            mathematical?: number | string | undefined;
            mode?: number | string | undefined;
            numOctaves?: number | string | undefined;
            offset?: number | string | undefined;
            opacity?: number | string | undefined;
            operator?: number | string | undefined;
            order?: number | string | undefined;
            orient?: number | string | undefined;
            orientation?: number | string | undefined;
            origin?: number | string | undefined;
            overflow?: number | string | undefined;
            overlinePosition?: number | string | undefined;
            overlineThickness?: number | string | undefined;
            paintOrder?: number | string | undefined;
            panose1?: number | string | undefined;
            path?: string | undefined;
            pathLength?: number | string | undefined;
            patternContentUnits?: string | undefined;
            patternTransform?: number | string | undefined;
            patternUnits?: string | undefined;
            pointerEvents?: number | string | undefined;
            points?: string | undefined;
            pointsAtX?: number | string | undefined;
            pointsAtY?: number | string | undefined;
            pointsAtZ?: number | string | undefined;
            preserveAlpha?: Booleanish | undefined;
            preserveAspectRatio?: string | undefined;
            primitiveUnits?: number | string | undefined;
            r?: number | string | undefined;
            radius?: number | string | undefined;
            refX?: number | string | undefined;
            refY?: number | string | undefined;
            renderingIntent?: number | string | undefined;
            repeatCount?: number | string | undefined;
            repeatDur?: number | string | undefined;
            requiredExtensions?: number | string | undefined;
            requiredFeatures?: number | string | undefined;
            restart?: number | string | undefined;
            result?: string | undefined;
            rotate?: number | string | undefined;
            rx?: number | string | undefined;
            ry?: number | string | undefined;
            scale?: number | string | undefined;
            seed?: number | string | undefined;
            shapeRendering?: number | string | undefined;
            slope?: number | string | undefined;
            spacing?: number | string | undefined;
            specularConstant?: number | string | undefined;
            specularExponent?: number | string | undefined;
            speed?: number | string | undefined;
            spreadMethod?: string | undefined;
            startOffset?: number | string | undefined;
            stdDeviation?: number | string | undefined;
            stemh?: number | string | undefined;
            stemv?: number | string | undefined;
            stitchTiles?: number | string | undefined;
            stopColor?: string | undefined;
            stopOpacity?: number | string | undefined;
            strikethroughPosition?: number | string | undefined;
            strikethroughThickness?: number | string | undefined;
            string?: number | string | undefined;
            stroke?: string | undefined;
            strokeDasharray?: string | number | undefined;
            strokeDashoffset?: string | number | undefined;
            strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
            strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
            strokeMiterlimit?: number | string | undefined;
            strokeOpacity?: number | string | undefined;
            strokeWidth?: number | string | undefined;
            surfaceScale?: number | string | undefined;
            systemLanguage?: number | string | undefined;
            tableValues?: number | string | undefined;
            targetX?: number | string | undefined;
            targetY?: number | string | undefined;
            textAnchor?: string | undefined;
            textDecoration?: number | string | undefined;
            textLength?: number | string | undefined;
            textRendering?: number | string | undefined;
            to?: number | string | undefined;
            transform?: string | undefined;
            u1?: number | string | undefined;
            u2?: number | string | undefined;
            underlinePosition?: number | string | undefined;
            underlineThickness?: number | string | undefined;
            unicode?: number | string | undefined;
            unicodeBidi?: number | string | undefined;
            unicodeRange?: number | string | undefined;
            unitsPerEm?: number | string | undefined;
            vAlphabetic?: number | string | undefined;
            values?: string | undefined;
            vectorEffect?: number | string | undefined;
            version?: string | undefined;
            vertAdvY?: number | string | undefined;
            vertOriginX?: number | string | undefined;
            vertOriginY?: number | string | undefined;
            vHanging?: number | string | undefined;
            vIdeographic?: number | string | undefined;
            viewBox?: string | undefined;
            viewTarget?: number | string | undefined;
            visibility?: number | string | undefined;
            vMathematical?: number | string | undefined;
            widths?: number | string | undefined;
            wordSpacing?: number | string | undefined;
            writingMode?: number | string | undefined;
            x1?: number | string | undefined;
            x2?: number | string | undefined;
            x?: number | string | undefined;
            xChannelSelector?: string | undefined;
            xHeight?: number | string | undefined;
            xlinkActuate?: string | undefined;
            xlinkArcrole?: string | undefined;
            xlinkHref?: string | undefined;
            xlinkRole?: string | undefined;
            xlinkShow?: string | undefined;
            xlinkTitle?: string | undefined;
            xlinkType?: string | undefined;
            xmlBase?: string | undefined;
            xmlLang?: string | undefined;
            xmlns?: string | undefined;
            xmlnsXlink?: string | undefined;
            xmlSpace?: string | undefined;
            y1?: number | string | undefined;
            y2?: number | string | undefined;
            y?: number | string | undefined;
            yChannelSelector?: string | undefined;
            z?: number | string | undefined;
            zoomAndPan?: string | undefined;
        }
        interface WebViewHTMLAttributes extends HTMLAttributes {
            allowFullScreen?: boolean | undefined;
            allowpopups?: boolean | undefined;
            autosize?: boolean | undefined;
            blinkfeatures?: string | undefined;
            disableblinkfeatures?: string | undefined;
            disableguestresize?: boolean | undefined;
            disablewebsecurity?: boolean | undefined;
            guestinstance?: string | undefined;
            httpreferrer?: string | undefined;
            nodeintegration?: boolean | undefined;
            partition?: string | undefined;
            plugins?: boolean | undefined;
            preload?: string | undefined;
            src?: string | undefined;
            useragent?: string | undefined;
            webpreferences?: string | undefined;
        }
        interface AriaAttributes {
            "aria-activedescendant"?: string | undefined;
            "aria-atomic"?: Booleanish | undefined;
            "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
            "aria-braillelabel"?: string | undefined;
            "aria-brailleroledescription"?: string | undefined;
            "aria-busy"?: Booleanish | undefined;
            "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-colcount"?: number | undefined;
            "aria-colindex"?: number | undefined;
            "aria-colindextext"?: string | undefined;
            "aria-colspan"?: number | undefined;
            "aria-controls"?: string | undefined;
            "aria-current"?:
                | boolean
                | "false"
                | "true"
                | "page"
                | "step"
                | "location"
                | "date"
                | "time"
                | undefined;
            "aria-describedby"?: string | undefined;
            "aria-description"?: string | undefined;
            "aria-details"?: string | undefined;
            "aria-disabled"?: Booleanish | undefined;
            "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
            "aria-errormessage"?: string | undefined;
            "aria-expanded"?: Booleanish | undefined;
            "aria-flowto"?: string | undefined;
            "aria-grabbed"?: Booleanish | undefined;
            "aria-haspopup"?:
                | boolean
                | "false"
                | "true"
                | "menu"
                | "listbox"
                | "tree"
                | "grid"
                | "dialog"
                | undefined;
            "aria-hidden"?: Booleanish | undefined;
            "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
            "aria-keyshortcuts"?: string | undefined;
            "aria-label"?: string | undefined;
            "aria-labelledby"?: string | undefined;
            "aria-level"?: number | undefined;
            "aria-live"?: "off" | "assertive" | "polite" | undefined;
            "aria-modal"?: Booleanish | undefined;
            "aria-multiline"?: Booleanish | undefined;
            "aria-multiselectable"?: Booleanish | undefined;
            "aria-orientation"?: "horizontal" | "vertical" | undefined;
            "aria-owns"?: string | undefined;
            "aria-placeholder"?: string | undefined;
            "aria-posinset"?: number | undefined;
            "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-readonly"?: Booleanish | undefined;
            "aria-relevant"?:
                | "additions"
                | "additions removals"
                | "additions text"
                | "all"
                | "removals"
                | "removals additions"
                | "removals text"
                | "text"
                | "text additions"
                | "text removals"
                | undefined;
            "aria-required"?: Booleanish | undefined;
            "aria-roledescription"?: string | undefined;
            "aria-rowcount"?: number | undefined;
            "aria-rowindex"?: number | undefined;
            "aria-rowindextext"?: string | undefined;
            "aria-rowspan"?: number | undefined;
            "aria-selected"?: Booleanish | undefined;
            "aria-setsize"?: number | undefined;
            "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
            "aria-valuemax"?: number | undefined;
            "aria-valuemin"?: number | undefined;
            "aria-valuenow"?: number | undefined;
            "aria-valuetext"?: string | undefined;
        }
        type Booleanish = boolean | "true" | "false";
        interface HTMLAttributes extends AriaAttributes, DOMAttributes {
            defaultChecked?: boolean | undefined;
            defaultValue?: string | number | readonly string[] | undefined;
            suppressContentEditableWarning?: boolean | undefined;
            suppressHydrationWarning?: boolean | undefined;
            accessKey?: string | undefined;
            autoFocus?: boolean | undefined;
            className?: string | undefined;
            contentEditable?: Booleanish | "inherit" | "plaintext-only" | undefined;
            contextMenu?: string | undefined;
            dir?: string | undefined;
            draggable?: Booleanish | undefined;
            hidden?: boolean | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            nonce?: string | undefined;
            slot?: string | undefined;
            spellCheck?: Booleanish | undefined;
            style?: CSSProperties | undefined;
            tabIndex?: number | undefined;
            title?: string | undefined;
            translate?: "yes" | "no" | undefined;
            radioGroup?: string | undefined;
            role?: AriaRole | undefined;
            about?: string | undefined;
            content?: string | undefined;
            datatype?: string | undefined;
            inlist?: any;
            prefix?: string | undefined;
            property?: string | undefined;
            rel?: string | undefined;
            resource?: string | undefined;
            rev?: string | undefined;
            typeof?: string | undefined;
            vocab?: string | undefined;
            autoCapitalize?: string | undefined;
            autoCorrect?: string | undefined;
            autoSave?: string | undefined;
            color?: string | undefined;
            itemProp?: string | undefined;
            itemScope?: boolean | undefined;
            itemType?: string | undefined;
            itemID?: string | undefined;
            itemRef?: string | undefined;
            results?: number | undefined;
            security?: string | undefined;
            unselectable?: "on" | "off" | undefined;
            inputMode?:
                | "none"
                | "text"
                | "tel"
                | "url"
                | "email"
                | "numeric"
                | "decimal"
                | "search"
                | undefined;
            is?: string | undefined;
        }
        type AriaRole =
            | "alert"
            | "alertdialog"
            | "application"
            | "article"
            | "banner"
            | "button"
            | "cell"
            | "checkbox"
            | "columnheader"
            | "combobox"
            | "complementary"
            | "contentinfo"
            | "definition"
            | "dialog"
            | "directory"
            | "document"
            | "feed"
            | "figure"
            | "form"
            | "grid"
            | "gridcell"
            | "group"
            | "heading"
            | "img"
            | "link"
            | "list"
            | "listbox"
            | "listitem"
            | "log"
            | "main"
            | "marquee"
            | "math"
            | "menu"
            | "menubar"
            | "menuitem"
            | "menuitemcheckbox"
            | "menuitemradio"
            | "navigation"
            | "none"
            | "note"
            | "option"
            | "presentation"
            | "progressbar"
            | "radio"
            | "radiogroup"
            | "region"
            | "row"
            | "rowgroup"
            | "rowheader"
            | "scrollbar"
            | "search"
            | "searchbox"
            | "separator"
            | "slider"
            | "spinbutton"
            | "status"
            | "switch"
            | "tab"
            | "table"
            | "tablist"
            | "tabpanel"
            | "term"
            | "textbox"
            | "timer"
            | "toolbar"
            | "tooltip"
            | "tree"
            | "treegrid"
            | "treeitem"
            | (string & {});
        export interface CSSProperties extends CSS.Properties<(string & {}) | number> {}
        interface TrustedHTML {}
        interface DOMAttributes {
            children?: hjsx.Node | undefined;
            dangerouslySetInnerHTML?:
                | {
                      __html: string | TrustedHTML;
                  }
                | undefined;
        }
        type Node =
            | Element
            | string
            | number
            | Iterable<Node>
            | Portal
            | boolean
            | null
            | undefined;
        interface Portal extends Element {
            children: Node;
        }
        interface Element<
            P = any,
            T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
        > {
            type: T;
            props: P;
            key: string | null;
        }
        type JSXElementConstructor<P> =
            | ((props: P, deprecatedLegacyContext?: any) => Node)
            | (new (props: P, deprecatedLegacyContext?: any) => Component<any, any>);
        interface Component<P = {}, S = {}, SS = any> extends String {
            [x: string]: any;
        }
        type DetailedHTMLProps<E extends HTMLAttributes> = Attributes & E;
        interface ClassAttributes<T> extends Attributes {
            ref?: LegacyRef<T> | undefined;
        }
        type LegacyRef<T> = string | Ref<T>;
        interface Attributes {
            key?: Key | null | undefined;
        }
        type Key = string | number | bigint;
        interface RefObject<T> {
            readonly current: T | null;
        }
        type RefCallback<T> = {
            bivarianceHack(instance: T | null): void;
        }["bivarianceHack"];
        type Ref<T> = RefCallback<T> | RefObject<T> | null;
    }
    export namespace JSX {
        interface IntrinsicElements {
            a: hjsx.DetailedHTMLProps<hjsx.AnchorHTMLAttributes>;
            abbr: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            address: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            area: hjsx.DetailedHTMLProps<hjsx.AreaHTMLAttributes>;
            article: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            aside: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            audio: hjsx.DetailedHTMLProps<hjsx.AudioHTMLAttributes>;
            b: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            base: hjsx.DetailedHTMLProps<hjsx.BaseHTMLAttributes>;
            bdi: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            bdo: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            big: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            blockquote: hjsx.DetailedHTMLProps<hjsx.BlockquoteHTMLAttributes>;
            body: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            br: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            button: hjsx.DetailedHTMLProps<hjsx.ButtonHTMLAttributes>;
            canvas: hjsx.DetailedHTMLProps<hjsx.CanvasHTMLAttributes>;
            caption: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            center: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            cite: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            code: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            col: hjsx.DetailedHTMLProps<hjsx.ColHTMLAttributes>;
            colgroup: hjsx.DetailedHTMLProps<hjsx.ColgroupHTMLAttributes>;
            data: hjsx.DetailedHTMLProps<hjsx.DataHTMLAttributes>;
            datalist: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            dd: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            del: hjsx.DetailedHTMLProps<hjsx.DelHTMLAttributes>;
            details: hjsx.DetailedHTMLProps<hjsx.DetailsHTMLAttributes>;
            dfn: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            dialog: hjsx.DetailedHTMLProps<hjsx.DialogHTMLAttributes>;
            div: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            dl: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            dt: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            em: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            embed: hjsx.DetailedHTMLProps<hjsx.EmbedHTMLAttributes>;
            fieldset: hjsx.DetailedHTMLProps<hjsx.FieldsetHTMLAttributes>;
            figcaption: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            figure: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            footer: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            form: hjsx.DetailedHTMLProps<hjsx.FormHTMLAttributes>;
            h1: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            h2: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            h3: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            h4: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            h5: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            h6: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            head: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            header: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            hgroup: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            hr: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            html: hjsx.DetailedHTMLProps<hjsx.HtmlHTMLAttributes>;
            i: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            iframe: hjsx.DetailedHTMLProps<hjsx.IframeHTMLAttributes>;
            img: hjsx.DetailedHTMLProps<hjsx.ImgHTMLAttributes>;
            input: hjsx.DetailedHTMLProps<hjsx.InputHTMLAttributes>;
            ins: hjsx.DetailedHTMLProps<hjsx.InsHTMLAttributes>;
            kbd: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            keygen: hjsx.DetailedHTMLProps<hjsx.KeygenHTMLAttributes>;
            label: hjsx.DetailedHTMLProps<hjsx.LabelHTMLAttributes>;
            legend: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            li: hjsx.DetailedHTMLProps<hjsx.LiHTMLAttributes>;
            link: hjsx.DetailedHTMLProps<hjsx.LinkHTMLAttributes>;
            main: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            map: hjsx.DetailedHTMLProps<hjsx.MapHTMLAttributes>;
            mark: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            menu: hjsx.DetailedHTMLProps<hjsx.MenuHTMLAttributes>;
            menuitem: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            meta: hjsx.DetailedHTMLProps<hjsx.MetaHTMLAttributes>;
            meter: hjsx.DetailedHTMLProps<hjsx.MeterHTMLAttributes>;
            nav: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            noindex: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            noscript: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            object: hjsx.DetailedHTMLProps<hjsx.ObjectHTMLAttributes>;
            ol: hjsx.DetailedHTMLProps<hjsx.OlHTMLAttributes>;
            optgroup: hjsx.DetailedHTMLProps<hjsx.OptgroupHTMLAttributes>;
            option: hjsx.DetailedHTMLProps<hjsx.OptionHTMLAttributes>;
            output: hjsx.DetailedHTMLProps<hjsx.OutputHTMLAttributes>;
            p: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            param: hjsx.DetailedHTMLProps<hjsx.ParamHTMLAttributes>;
            picture: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            pre: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            progress: hjsx.DetailedHTMLProps<hjsx.ProgressHTMLAttributes>;
            q: hjsx.DetailedHTMLProps<hjsx.QuoteHTMLAttributes>;
            rp: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            rt: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            ruby: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            s: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            samp: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            search: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            slot: hjsx.DetailedHTMLProps<hjsx.SlotHTMLAttributes>;
            script: hjsx.DetailedHTMLProps<hjsx.ScriptHTMLAttributes>;
            section: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            select: hjsx.DetailedHTMLProps<hjsx.SelectHTMLAttributes>;
            small: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            source: hjsx.DetailedHTMLProps<hjsx.SourceHTMLAttributes>;
            span: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            strong: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            style: hjsx.DetailedHTMLProps<hjsx.StyleHTMLAttributes>;
            sub: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            summary: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            sup: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            table: hjsx.DetailedHTMLProps<hjsx.TableHTMLAttributes>;
            template: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            tbody: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            td: hjsx.DetailedHTMLProps<hjsx.TdHTMLAttributes>;
            textarea: hjsx.DetailedHTMLProps<hjsx.TextareaHTMLAttributes>;
            tfoot: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            th: hjsx.DetailedHTMLProps<hjsx.ThHTMLAttributes>;
            thead: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            time: hjsx.DetailedHTMLProps<hjsx.TimeHTMLAttributes>;
            title: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            tr: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            track: hjsx.DetailedHTMLProps<hjsx.TrackHTMLAttributes>;
            u: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            ul: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            var: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            video: hjsx.DetailedHTMLProps<hjsx.VideoHTMLAttributes>;
            wbr: hjsx.DetailedHTMLProps<hjsx.HTMLAttributes>;
            webview: hjsx.DetailedHTMLProps<hjsx.WebViewHTMLAttributes>;
            svg: hjsx.SVGProps<SVGSVGElement>;
            animate: hjsx.SVGProps<SVGElement>;
            animateMotion: hjsx.SVGProps<SVGElement>;
            animateTransform: hjsx.SVGProps<SVGElement>;
            circle: hjsx.SVGProps<SVGCircleElement>;
            clipPath: hjsx.SVGProps<SVGClipPathElement>;
            defs: hjsx.SVGProps<SVGDefsElement>;
            desc: hjsx.SVGProps<SVGDescElement>;
            ellipse: hjsx.SVGProps<SVGEllipseElement>;
            feBlend: hjsx.SVGProps<SVGFEBlendElement>;
            feColorMatrix: hjsx.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: hjsx.SVGProps<SVGFEComponentTransferElement>;
            feComposite: hjsx.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: hjsx.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: hjsx.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: hjsx.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: hjsx.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: hjsx.SVGProps<SVGFEDropShadowElement>;
            feFlood: hjsx.SVGProps<SVGFEFloodElement>;
            feFuncA: hjsx.SVGProps<SVGFEFuncAElement>;
            feFuncB: hjsx.SVGProps<SVGFEFuncBElement>;
            feFuncG: hjsx.SVGProps<SVGFEFuncGElement>;
            feFuncR: hjsx.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: hjsx.SVGProps<SVGFEGaussianBlurElement>;
            feImage: hjsx.SVGProps<SVGFEImageElement>;
            feMerge: hjsx.SVGProps<SVGFEMergeElement>;
            feMergeNode: hjsx.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: hjsx.SVGProps<SVGFEMorphologyElement>;
            feOffset: hjsx.SVGProps<SVGFEOffsetElement>;
            fePointLight: hjsx.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: hjsx.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: hjsx.SVGProps<SVGFESpotLightElement>;
            feTile: hjsx.SVGProps<SVGFETileElement>;
            feTurbulence: hjsx.SVGProps<SVGFETurbulenceElement>;
            filter: hjsx.SVGProps<SVGFilterElement>;
            foreignObject: hjsx.SVGProps<SVGForeignObjectElement>;
            g: hjsx.SVGProps<SVGGElement>;
            image: hjsx.SVGProps<SVGImageElement>;
            line: hjsx.SVGLineElementAttributes<SVGLineElement>;
            linearGradient: hjsx.SVGProps<SVGLinearGradientElement>;
            marker: hjsx.SVGProps<SVGMarkerElement>;
            mask: hjsx.SVGProps<SVGMaskElement>;
            metadata: hjsx.SVGProps<SVGMetadataElement>;
            mpath: hjsx.SVGProps<SVGElement>;
            path: hjsx.SVGProps<SVGPathElement>;
            pattern: hjsx.SVGProps<SVGPatternElement>;
            polygon: hjsx.SVGProps<SVGPolygonElement>;
            polyline: hjsx.SVGProps<SVGPolylineElement>;
            radialGradient: hjsx.SVGProps<SVGRadialGradientElement>;
            rect: hjsx.SVGProps<SVGRectElement>;
            stop: hjsx.SVGProps<SVGStopElement>;
            switch: hjsx.SVGProps<SVGSwitchElement>;
            symbol: hjsx.SVGProps<SVGSymbolElement>;
            text: hjsx.SVGTextElementAttributes<SVGTextElement>;
            textPath: hjsx.SVGProps<SVGTextPathElement>;
            tspan: hjsx.SVGProps<SVGTSpanElement>;
            use: hjsx.SVGProps<SVGUseElement>;
            view: hjsx.SVGProps<SVGViewElement>;
        }
    }
    interface Element {}
    interface DocumentFragment {}
    interface HTMLElement extends Element {}
    interface HTMLAnchorElement extends HTMLElement {}
    interface HTMLAreaElement extends HTMLElement {}
    interface HTMLAudioElement extends HTMLElement {}
    interface HTMLBaseElement extends HTMLElement {}
    interface HTMLBodyElement extends HTMLElement {}
    interface HTMLBRElement extends HTMLElement {}
    interface HTMLButtonElement extends HTMLElement {}
    interface HTMLCanvasElement extends HTMLElement {}
    interface HTMLDataElement extends HTMLElement {}
    interface HTMLDataListElement extends HTMLElement {}
    interface HTMLDetailsElement extends HTMLElement {}
    interface HTMLDialogElement extends HTMLElement {}
    interface HTMLDivElement extends HTMLElement {}
    interface HTMLDListElement extends HTMLElement {}
    interface HTMLEmbedElement extends HTMLElement {}
    interface HTMLFieldSetElement extends HTMLElement {}
    interface HTMLFormElement extends HTMLElement {}
    interface HTMLHeadingElement extends HTMLElement {}
    interface HTMLHeadElement extends HTMLElement {}
    interface HTMLHRElement extends HTMLElement {}
    interface HTMLHtmlElement extends HTMLElement {}
    interface HTMLIFrameElement extends HTMLElement {}
    interface HTMLImageElement extends HTMLElement {}
    interface HTMLInputElement extends HTMLElement {}
    interface HTMLModElement extends HTMLElement {}
    interface HTMLLabelElement extends HTMLElement {}
    interface HTMLLegendElement extends HTMLElement {}
    interface HTMLLIElement extends HTMLElement {}
    interface HTMLLinkElement extends HTMLElement {}
    interface HTMLMapElement extends HTMLElement {}
    interface HTMLMetaElement extends HTMLElement {}
    interface HTMLMeterElement extends HTMLElement {}
    interface HTMLObjectElement extends HTMLElement {}
    interface HTMLOListElement extends HTMLElement {}
    interface HTMLOptGroupElement extends HTMLElement {}
    interface HTMLOptionElement extends HTMLElement {}
    interface HTMLOutputElement extends HTMLElement {}
    interface HTMLParagraphElement extends HTMLElement {}
    interface HTMLParamElement extends HTMLElement {}
    interface HTMLPreElement extends HTMLElement {}
    interface HTMLProgressElement extends HTMLElement {}
    interface HTMLQuoteElement extends HTMLElement {}
    interface HTMLSlotElement extends HTMLElement {}
    interface HTMLScriptElement extends HTMLElement {}
    interface HTMLSelectElement extends HTMLElement {}
    interface HTMLSourceElement extends HTMLElement {}
    interface HTMLSpanElement extends HTMLElement {}
    interface HTMLStyleElement extends HTMLElement {}
    interface HTMLTableElement extends HTMLElement {}
    interface HTMLTableColElement extends HTMLElement {}
    interface HTMLTableDataCellElement extends HTMLElement {}
    interface HTMLTableHeaderCellElement extends HTMLElement {}
    interface HTMLTableRowElement extends HTMLElement {}
    interface HTMLTableSectionElement extends HTMLElement {}
    interface HTMLTemplateElement extends HTMLElement {}
    interface HTMLTextAreaElement extends HTMLElement {}
    interface HTMLTimeElement extends HTMLElement {}
    interface HTMLTitleElement extends HTMLElement {}
    interface HTMLTrackElement extends HTMLElement {}
    interface HTMLUListElement extends HTMLElement {}
    interface HTMLVideoElement extends HTMLElement {}
    interface HTMLWebViewElement extends HTMLElement {}
    interface SVGElement extends Element {}
    interface SVGSVGElement extends SVGElement {}
    interface SVGCircleElement extends SVGElement {}
    interface SVGClipPathElement extends SVGElement {}
    interface SVGDefsElement extends SVGElement {}
    interface SVGDescElement extends SVGElement {}
    interface SVGEllipseElement extends SVGElement {}
    interface SVGFEBlendElement extends SVGElement {}
    interface SVGFEColorMatrixElement extends SVGElement {}
    interface SVGFEComponentTransferElement extends SVGElement {}
    interface SVGFECompositeElement extends SVGElement {}
    interface SVGFEConvolveMatrixElement extends SVGElement {}
    interface SVGFEDiffuseLightingElement extends SVGElement {}
    interface SVGFEDisplacementMapElement extends SVGElement {}
    interface SVGFEDistantLightElement extends SVGElement {}
    interface SVGFEDropShadowElement extends SVGElement {}
    interface SVGFEFloodElement extends SVGElement {}
    interface SVGFEFuncAElement extends SVGElement {}
    interface SVGFEFuncBElement extends SVGElement {}
    interface SVGFEFuncGElement extends SVGElement {}
    interface SVGFEFuncRElement extends SVGElement {}
    interface SVGFEGaussianBlurElement extends SVGElement {}
    interface SVGFEImageElement extends SVGElement {}
    interface SVGFEMergeElement extends SVGElement {}
    interface SVGFEMergeNodeElement extends SVGElement {}
    interface SVGFEMorphologyElement extends SVGElement {}
    interface SVGFEOffsetElement extends SVGElement {}
    interface SVGFEPointLightElement extends SVGElement {}
    interface SVGFESpecularLightingElement extends SVGElement {}
    interface SVGFESpotLightElement extends SVGElement {}
    interface SVGFETileElement extends SVGElement {}
    interface SVGFETurbulenceElement extends SVGElement {}
    interface SVGFilterElement extends SVGElement {}
    interface SVGForeignObjectElement extends SVGElement {}
    interface SVGGElement extends SVGElement {}
    interface SVGImageElement extends SVGElement {}
    interface SVGLineElement extends SVGElement {}
    interface SVGLinearGradientElement extends SVGElement {}
    interface SVGMarkerElement extends SVGElement {}
    interface SVGMaskElement extends SVGElement {}
    interface SVGMetadataElement extends SVGElement {}
    interface SVGPathElement extends SVGElement {}
    interface SVGPatternElement extends SVGElement {}
    interface SVGPolygonElement extends SVGElement {}
    interface SVGPolylineElement extends SVGElement {}
    interface SVGRadialGradientElement extends SVGElement {}
    interface SVGRectElement extends SVGElement {}
    interface SVGStopElement extends SVGElement {}
    interface SVGSwitchElement extends SVGElement {}
    interface SVGSymbolElement extends SVGElement {}
    interface SVGTextElement extends SVGElement {}
    interface SVGTextPathElement extends SVGElement {}
    interface SVGTSpanElement extends SVGElement {}
    interface SVGUseElement extends SVGElement {}
    interface SVGViewElement extends SVGElement {}
    export namespace CSS {
        export interface Properties<TLength = (string & {}) | 0, TTime = string & {}> {
            [key: string]: string | number | TLength | TTime | null | undefined;
        }
    }
}

export {
    hjsx,
    fragment,
};
