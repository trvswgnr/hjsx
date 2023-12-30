declare namespace sjsx {
    type PropsWithChildren<P = unknown> = P & { children?: Node | undefined };
    interface SVGLineElementAttributes<T> extends SVGProps<T> {}
    interface SVGTextElementAttributes<T> extends SVGProps<T> {}
    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {}
    type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;
    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
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
        capture?: boolean | "user" | "environment" | undefined; 
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
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
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
        children?: sjsx.Node | undefined;
        dangerouslySetInnerHTML?:
            | {
                  __html: string | TrustedHTML;
              }
            | undefined;
    }
    type Node = Element | string | number | Iterable<Node> | Portal | boolean | null | undefined;
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
        a: sjsx.DetailedHTMLProps<sjsx.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        address: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        area: sjsx.DetailedHTMLProps<sjsx.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: sjsx.DetailedHTMLProps<sjsx.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        base: sjsx.DetailedHTMLProps<sjsx.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        big: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: sjsx.DetailedHTMLProps<sjsx.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        body: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: sjsx.DetailedHTMLProps<sjsx.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: sjsx.DetailedHTMLProps<sjsx.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        center: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        code: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        col: sjsx.DetailedHTMLProps<sjsx.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: sjsx.DetailedHTMLProps<sjsx.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: sjsx.DetailedHTMLProps<sjsx.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
        datalist: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        del: sjsx.DetailedHTMLProps<sjsx.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
        details: sjsx.DetailedHTMLProps<sjsx.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
        dfn: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: sjsx.DetailedHTMLProps<sjsx.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
        div: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        em: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: sjsx.DetailedHTMLProps<sjsx.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: sjsx.DetailedHTMLProps<sjsx.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        form: sjsx.DetailedHTMLProps<sjsx.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
        header: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: sjsx.DetailedHTMLProps<sjsx.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: sjsx.DetailedHTMLProps<sjsx.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: sjsx.DetailedHTMLProps<sjsx.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: sjsx.DetailedHTMLProps<sjsx.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: sjsx.DetailedHTMLProps<sjsx.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: sjsx.DetailedHTMLProps<sjsx.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: sjsx.DetailedHTMLProps<sjsx.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: sjsx.DetailedHTMLProps<sjsx.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: sjsx.DetailedHTMLProps<sjsx.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        map: sjsx.DetailedHTMLProps<sjsx.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: sjsx.DetailedHTMLProps<sjsx.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: sjsx.DetailedHTMLProps<sjsx.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: sjsx.DetailedHTMLProps<sjsx.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
        nav: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        noindex: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        object: sjsx.DetailedHTMLProps<sjsx.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: sjsx.DetailedHTMLProps<sjsx.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: sjsx.DetailedHTMLProps<sjsx.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: sjsx.DetailedHTMLProps<sjsx.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: sjsx.DetailedHTMLProps<sjsx.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
        p: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: sjsx.DetailedHTMLProps<sjsx.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: sjsx.DetailedHTMLProps<sjsx.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: sjsx.DetailedHTMLProps<sjsx.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        s: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        search: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        slot: sjsx.DetailedHTMLProps<sjsx.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
        script: sjsx.DetailedHTMLProps<sjsx.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        select: sjsx.DetailedHTMLProps<sjsx.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        source: sjsx.DetailedHTMLProps<sjsx.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        style: sjsx.DetailedHTMLProps<sjsx.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        table: sjsx.DetailedHTMLProps<sjsx.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        template: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
        tbody: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: sjsx.DetailedHTMLProps<sjsx.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: sjsx.DetailedHTMLProps<sjsx.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: sjsx.DetailedHTMLProps<sjsx.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: sjsx.DetailedHTMLProps<sjsx.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
        title: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: sjsx.DetailedHTMLProps<sjsx.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        var: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        video: sjsx.DetailedHTMLProps<sjsx.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: sjsx.DetailedHTMLProps<sjsx.HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: sjsx.DetailedHTMLProps<sjsx.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
        svg: sjsx.SVGProps<SVGSVGElement>;
        animate: sjsx.SVGProps<SVGElement>;
        animateMotion: sjsx.SVGProps<SVGElement>;
        animateTransform: sjsx.SVGProps<SVGElement>;
        circle: sjsx.SVGProps<SVGCircleElement>;
        clipPath: sjsx.SVGProps<SVGClipPathElement>;
        defs: sjsx.SVGProps<SVGDefsElement>;
        desc: sjsx.SVGProps<SVGDescElement>;
        ellipse: sjsx.SVGProps<SVGEllipseElement>;
        feBlend: sjsx.SVGProps<SVGFEBlendElement>;
        feColorMatrix: sjsx.SVGProps<SVGFEColorMatrixElement>;
        feComponentTransfer: sjsx.SVGProps<SVGFEComponentTransferElement>;
        feComposite: sjsx.SVGProps<SVGFECompositeElement>;
        feConvolveMatrix: sjsx.SVGProps<SVGFEConvolveMatrixElement>;
        feDiffuseLighting: sjsx.SVGProps<SVGFEDiffuseLightingElement>;
        feDisplacementMap: sjsx.SVGProps<SVGFEDisplacementMapElement>;
        feDistantLight: sjsx.SVGProps<SVGFEDistantLightElement>;
        feDropShadow: sjsx.SVGProps<SVGFEDropShadowElement>;
        feFlood: sjsx.SVGProps<SVGFEFloodElement>;
        feFuncA: sjsx.SVGProps<SVGFEFuncAElement>;
        feFuncB: sjsx.SVGProps<SVGFEFuncBElement>;
        feFuncG: sjsx.SVGProps<SVGFEFuncGElement>;
        feFuncR: sjsx.SVGProps<SVGFEFuncRElement>;
        feGaussianBlur: sjsx.SVGProps<SVGFEGaussianBlurElement>;
        feImage: sjsx.SVGProps<SVGFEImageElement>;
        feMerge: sjsx.SVGProps<SVGFEMergeElement>;
        feMergeNode: sjsx.SVGProps<SVGFEMergeNodeElement>;
        feMorphology: sjsx.SVGProps<SVGFEMorphologyElement>;
        feOffset: sjsx.SVGProps<SVGFEOffsetElement>;
        fePointLight: sjsx.SVGProps<SVGFEPointLightElement>;
        feSpecularLighting: sjsx.SVGProps<SVGFESpecularLightingElement>;
        feSpotLight: sjsx.SVGProps<SVGFESpotLightElement>;
        feTile: sjsx.SVGProps<SVGFETileElement>;
        feTurbulence: sjsx.SVGProps<SVGFETurbulenceElement>;
        filter: sjsx.SVGProps<SVGFilterElement>;
        foreignObject: sjsx.SVGProps<SVGForeignObjectElement>;
        g: sjsx.SVGProps<SVGGElement>;
        image: sjsx.SVGProps<SVGImageElement>;
        line: sjsx.SVGLineElementAttributes<SVGLineElement>;
        linearGradient: sjsx.SVGProps<SVGLinearGradientElement>;
        marker: sjsx.SVGProps<SVGMarkerElement>;
        mask: sjsx.SVGProps<SVGMaskElement>;
        metadata: sjsx.SVGProps<SVGMetadataElement>;
        mpath: sjsx.SVGProps<SVGElement>;
        path: sjsx.SVGProps<SVGPathElement>;
        pattern: sjsx.SVGProps<SVGPatternElement>;
        polygon: sjsx.SVGProps<SVGPolygonElement>;
        polyline: sjsx.SVGProps<SVGPolylineElement>;
        radialGradient: sjsx.SVGProps<SVGRadialGradientElement>;
        rect: sjsx.SVGProps<SVGRectElement>;
        stop: sjsx.SVGProps<SVGStopElement>;
        switch: sjsx.SVGProps<SVGSwitchElement>;
        symbol: sjsx.SVGProps<SVGSymbolElement>;
        text: sjsx.SVGTextElementAttributes<SVGTextElement>;
        textPath: sjsx.SVGProps<SVGTextPathElement>;
        tspan: sjsx.SVGProps<SVGTSpanElement>;
        use: sjsx.SVGProps<SVGUseElement>;
        view: sjsx.SVGProps<SVGViewElement>;
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
    type: sjsx.Element["type"];
    props?: sjsx.Element["props"];
    children?: sjsx.Node;
};
