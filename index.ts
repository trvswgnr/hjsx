class Html {
    private tagName: string;
    private children: Html[] = [];
    private attributes: { [key: string]: string } = {};
    private innerHTML: string = '';
    private constructor(tagName: string) {
        this.tagName = tagName;
    }

    static create(tagName: string): Html {
        return new Html(tagName);
    }

    appendChild(child: Html): this {
        this.children.push(child);
        this.innerHTML += child.outerHTML;
        return this;
    }

    get outerHTML(): string {
        const attributes = Object.keys(this.attributes).map(key => `${key}="${this.attributes[key]}"`).join(' ');
        return `<${this.tagName} ${attributes}>${this.innerHTML}</${this.tagName}>`;
    }

    set outerHTML(_value: string) {
        throw new Error('outerHTML is readonly');
    }

    setAttribute(key: string, value: string): this {
        this.attributes[key] = value;
        return this;
    }

    html(value: string): this {
        this.innerHTML = value;
        return this;
    }


    render(): string {
        return this.outerHTML;
    }
}

const p = Html
    .create('div')
    .setAttribute('id', 'container')
    .appendChild(Html.create('div')
        .setAttribute('id', 'c2')
        .html('this is c2'))
    .appendChild(Html
        .create('div')
        .setAttribute('id', 'c1')
        .html('this is c1'))
    .render();

console.log(p);