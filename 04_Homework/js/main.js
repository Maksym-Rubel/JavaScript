class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value > 0) {
            this._radius = value
        }
        else {
            return;
        }
    }
    get diameter() {
        return this._radius * 2;
    }

    area() {
        return Math.PI * this._radius ** 2
    }
    circumference() {
        return 2 * Math.PI * this._radius
    }



}


let myCircle = new Circle(5);

console.log("Радіус:", myCircle.radius);
console.log("Діаметр:", myCircle.diameter);
console.log("Площа:", myCircle.area().toFixed(2));
console.log("Довжина кола:", myCircle.circumference().toFixed(2));

myCircle.radius = 10;
console.log("\nПісля зміни радіуса:");

console.log("Радіус:", myCircle.radius);
console.log("Діаметр:", myCircle.diameter);
console.log("Площа:", myCircle.area().toFixed(2));
console.log("Довжина кола:", myCircle.circumference());




class HtmlElement {
    constructor(tagName, isSelfClosing = false, textContent = '') {
        this.tagName = tagName;
        this.isSelfClosing = isSelfClosing;
        this.textContent = textContent;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }
    setAttribute(name, value) {
        this.attributes.push({ name, value });
    }
    setStyle(property, value) {
        this.styles.push({ property, value });
    }
    appendChild(element) {
        this.children.push(element);
    }
    prependChild(element) {
        this.children.unshift(element);
    }
    getHtml() {
        let attrString = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(' ');
        let styleString = this.styles.map(style => `${style.property}: ${style.value};`).join(' ');
        if (styleString) {
            attrString += `style="${styleString}"`;
        }

        let html = `<${this.tagName} ${attrString ? ' ' + attrString : ''}`;

        if (this.isSelfClosing) {
            html += ' />';
        } else {
            html += '>';

            if (this.textContent) {
                html += this.textContent;
            }

            for (let child of this.children) {
                html += child.getHtml();
            }

            html += `</${this.tagName}>`;
        }

        return html;
    }
}

// const wrapper = new HtmlElement("div");
// wrapper.setAttribute("id", "wrapper");
// wrapper.setStyle("display", "flex");


// function createBlock() {
//     const block = new HtmlElement("div");
//     block.setStyle("width", "300px");
//     block.setStyle("margin", "10px");

//     const h3 = new HtmlElement("h3", false, "What is Lorem Ipsum?");
//     const img = new HtmlElement("img", true);
//     img.setAttribute("src", "lipsum.jpg");
//     img.setAttribute("alt", "Lorem Ipsum");
//     img.setStyle("width", "100%");

//     const p = new HtmlElement("p");
//     p.setStyle("text-align", "justify");
//     p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

//     const a = new HtmlElement("a", false, "More...");
//     a.setAttribute("href", "https://www.lipsum.com/");
//     a.setAttribute("target", "_blank");

//     p.appendChild(a);
//     block.appendChild(h3);
//     block.appendChild(img);
//     block.appendChild(p);

//     return block;
// }



// wrapper.appendChild(createBlock());


// document.write(wrapper.getHtml());



class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = {};
    }


    setStyle(property, value) {
        this.styles[property] = value;
    }


    removeStyle(property) {
        delete this.styles[property];
    }

    getCss() {
        let css = `.${this.className} {\n`;
        for (let property in this.styles) {
            css += `${property}: ${this.styles[property]};\n`;
        }
        css += `}`;
        return css;
    }
}


// const cardClass = new CssClass("card");


// cardClass.setStyle("width", "300px");
// cardClass.setStyle("margin", "10px");
// cardClass.setStyle("border", "1px solid #ccc");


// cardClass.removeStyle("border");


// console.log(cardClass.getCss());


class HtmlBlock {
    constructor() {
        this.styles = [];
        this.root = null;
    }

    addStyle(cssClass) {
        this.styles.push(cssClass);
    }

    setRoot(element) {
        this.root = element;
    }

    getCode() {
        let code = '<style>\n';
        for (let style of this.styles) {
            code += style.getCss();
        }
        code += '</style>\n';
        code += this.root.getHtml();
        return code;
    }
}


let wrapClass = new CssClass("wrap");
wrapClass.setStyle("display", "flex");

let blockClass = new CssClass("block");
blockClass.setStyle("width", "300px");
blockClass.setStyle("margin", "10px");

let imgClass = new CssClass("img");
imgClass.setStyle("width", "100%");

let textClass = new CssClass("text");
textClass.setStyle("text-align", "justify");

function createContentBlock() {
    let block = new HtmlElement("div");
    block.setAttribute("class", "block");

    let h3 = new HtmlElement("h3", false, "What is Lorem Ipsum?");
    let img = new HtmlElement("img", true);
    img.setAttribute("class", "img");
    img.setAttribute("src", "lipsum.jpg");
    img.setAttribute("alt", "Lorem Ipsum");

    let p = new HtmlElement("p");
    p.setAttribute("class", "text");
    p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

    let a = new HtmlElement("a", false, "More...");
    a.setAttribute("href", "https://www.lipsum.com/");
    a.setAttribute("target", "_blank");

    p.appendChild(a);
    block.appendChild(h3);
    block.appendChild(img);
    block.appendChild(p);

    return block;
}


let wrapper = new HtmlElement("div");
wrapper.setAttribute("id", "wrapper");
wrapper.setAttribute("class", "wrap");
wrapper.appendChild(createContentBlock());
wrapper.appendChild(createContentBlock());

const htmlBlock = new HtmlBlock();
htmlBlock.addStyle(wrapClass);
htmlBlock.addStyle(blockClass);
htmlBlock.addStyle(imgClass);
htmlBlock.addStyle(textClass);
htmlBlock.setRoot(wrapper);

document.write(htmlBlock.getCode());