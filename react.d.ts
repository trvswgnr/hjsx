declare namespace React {
    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
    interface SVGLineElementAttributes<T> extends SVGProps<T> {}
    interface SVGTextElementAttributes<T> extends SVGProps<T> {}
    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
    type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;
    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
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

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        ping?: string | undefined;
        target?: HTMLAttributeAnchorTarget | undefined;
        type?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string | undefined;
        target?: string | undefined;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
        width?: number | string | undefined;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | readonly string[] | number | undefined;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
        name?: string | undefined;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        src?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        name?: string | undefined;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string | undefined;
        action?: string | undefined;
        autoComplete?: string | undefined;
        encType?: string | undefined;
        method?: string | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        target?: string | undefined;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string | undefined;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        /** @deprecated */
        frameBorder?: number | string | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        /** @deprecated */
        marginHeight?: number | undefined;
        /** @deprecated */
        marginWidth?: number | undefined;
        name?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sandbox?: string | undefined;
        /** @deprecated */
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        width?: number | string | undefined;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string | undefined;
        alt?: string | undefined;
        autoComplete?: string | undefined;
        capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
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

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        challenge?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        keyType?: string | undefined;
        keyParams?: string | undefined;
        name?: string | undefined;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | readonly string[] | number | undefined;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string | undefined;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string | undefined;
        httpEquiv?: string | undefined;
        name?: string | undefined;
        media?: string | undefined;
        content?: string | undefined;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | string | undefined;
        min?: number | string | undefined;
        optimum?: number | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean | undefined;
        start?: number | undefined;
        type?: "1" | "a" | "A" | "i" | "I" | undefined;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
        name?: string | undefined;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean | undefined;
        /** @deprecated */
        charSet?: string | undefined;
        crossOrigin?: CrossOrigin;
        defer?: boolean | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        src?: string | undefined;
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string | undefined;
        scoped?: boolean | undefined;
        type?: string | undefined;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
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

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string | undefined;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        src?: string | undefined;
        srcLang?: string | undefined;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        width?: number | string | undefined;
        disablePictureInPicture?: boolean | undefined;
        disableRemotePlayback?: boolean | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        suppressHydrationWarning?: boolean | undefined;

        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
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

        // Other HTML properties supported by SVG elements in browsers
        role?: AriaRole | undefined;
        tabIndex?: number | undefined;
        crossOrigin?: CrossOrigin;

        // SVG Specific attributes
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

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
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
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
        "aria-describedby"?: string | undefined;
        "aria-description"?: string | undefined;
        "aria-details"?: string | undefined;
        "aria-disabled"?: Booleanish | undefined;
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        "aria-errormessage"?: string | undefined;
        "aria-expanded"?: Booleanish | undefined;
        "aria-flowto"?: string | undefined;
        "aria-grabbed"?: Booleanish | undefined;
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
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
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
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
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
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
    interface DOMAttributes<T> {
        children?: ReactNode | undefined;
        dangerouslySetInnerHTML?:
            | {
                  __html: string | TrustedHTML;
              }
            | undefined;
    }
    type ReactNode = ReactElement | string | number | Iterable<ReactNode> | ReactPortal | boolean | null | undefined;
    interface ReactPortal extends ReactElement {
        children: ReactNode;
    }
    interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }
    type JSXElementConstructor<P> =
        | ((props: P, deprecatedLegacyContext?: any) => ReactNode)
        | (new (props: P, deprecatedLegacyContext?: any) => Component<any, any>);
    interface Component<P = {}, S = {}, SS = any> {
        [x: string]: any;
    }
    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;
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

declare namespace CSS {
    export interface Properties<TLength = (string & {}) | 0, TTime = string & {}> {
        [key: string]: string | number | TLength | TTime | null | undefined;
    }
}

declare namespace JSX {
    interface IntrinsicElements {
        a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
        datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
        details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
        dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
        div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
        header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
        nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
        p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
        script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
        tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
        title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        var: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
        svg: React.SVGProps<SVGSVGElement>;
        animate: React.SVGProps<SVGElement>;
        animateMotion: React.SVGProps<SVGElement>;
        animateTransform: React.SVGProps<SVGElement>;
        circle: React.SVGProps<SVGCircleElement>;
        clipPath: React.SVGProps<SVGClipPathElement>;
        defs: React.SVGProps<SVGDefsElement>;
        desc: React.SVGProps<SVGDescElement>;
        ellipse: React.SVGProps<SVGEllipseElement>;
        feBlend: React.SVGProps<SVGFEBlendElement>;
        feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
        feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
        feComposite: React.SVGProps<SVGFECompositeElement>;
        feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
        feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
        feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
        feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
        feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
        feFlood: React.SVGProps<SVGFEFloodElement>;
        feFuncA: React.SVGProps<SVGFEFuncAElement>;
        feFuncB: React.SVGProps<SVGFEFuncBElement>;
        feFuncG: React.SVGProps<SVGFEFuncGElement>;
        feFuncR: React.SVGProps<SVGFEFuncRElement>;
        feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
        feImage: React.SVGProps<SVGFEImageElement>;
        feMerge: React.SVGProps<SVGFEMergeElement>;
        feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
        feMorphology: React.SVGProps<SVGFEMorphologyElement>;
        feOffset: React.SVGProps<SVGFEOffsetElement>;
        fePointLight: React.SVGProps<SVGFEPointLightElement>;
        feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
        feSpotLight: React.SVGProps<SVGFESpotLightElement>;
        feTile: React.SVGProps<SVGFETileElement>;
        feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
        filter: React.SVGProps<SVGFilterElement>;
        foreignObject: React.SVGProps<SVGForeignObjectElement>;
        g: React.SVGProps<SVGGElement>;
        image: React.SVGProps<SVGImageElement>;
        line: React.SVGLineElementAttributes<SVGLineElement>;
        linearGradient: React.SVGProps<SVGLinearGradientElement>;
        marker: React.SVGProps<SVGMarkerElement>;
        mask: React.SVGProps<SVGMaskElement>;
        metadata: React.SVGProps<SVGMetadataElement>;
        mpath: React.SVGProps<SVGElement>;
        path: React.SVGProps<SVGPathElement>;
        pattern: React.SVGProps<SVGPatternElement>;
        polygon: React.SVGProps<SVGPolygonElement>;
        polyline: React.SVGProps<SVGPolylineElement>;
        radialGradient: React.SVGProps<SVGRadialGradientElement>;
        rect: React.SVGProps<SVGRectElement>;
        stop: React.SVGProps<SVGStopElement>;
        switch: React.SVGProps<SVGSwitchElement>;
        symbol: React.SVGProps<SVGSymbolElement>;
        text: React.SVGTextElementAttributes<SVGTextElement>;
        textPath: React.SVGProps<SVGTextPathElement>;
        tspan: React.SVGProps<SVGTSpanElement>;
        use: React.SVGProps<SVGUseElement>;
        view: React.SVGProps<SVGViewElement>;
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

type RenderProps = {
    type: React.ReactElement["type"];
    props?: React.ReactElement["props"];
    children?: React.ReactNode;
};
