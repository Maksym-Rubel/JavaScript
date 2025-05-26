


// let rectangle = {
//     width:200,
//     height:100,
//     backgroundColor:"blue",
//     border:"solid"
// }

// let elipse = {
//     width:200,
//     height:100,
//     backgroundColor:"blue",
//     border:"solid",
//     borderRadius:"50%"

// }



// class RootFigure
// {
//     #name;
//     constructor(width,height,id,bg_color,color = "black")
//     {
//         this.width = width;
//         this.height = height;
//         this.bg_color = bg_color;
//         this.color = color;
//         this.style_figure = `width:${this.width}px; height:${this.height}px; background-color:${this.bg_color}; color:${this.color}; border:solid 3px; display:flex; justify-content:center; align-items:center;
//         padding:10px;`;
//     }

//     set(value)
//     {
//         this.#name = value.trim().length < 1 ? "Figure" : value.trim();
//     }
//     create()
//     {
//         document.writeln(`<div style = "${this.style_figure}">${this.#name} </div>`)
//     }
//     getColor()
//     {
//         return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},
//         ${Math.floor(Math.random() * 256)})`
//     }
//     generateColor()
//     {
//         document.getElementById(`${this.id}`).style.backgroundColor = this.bg_color = this.getColor();
//     }
// }

// let figure = new RootFigure(100,200,"blue","lightblue");
// figure.set("Figure")
// figure.create()
// setTimeout(()=>{
//     figure.generateColor()
// },2000);
// // figure.generateColor();
// console.log(figure)

// class Rectangle extends RootFigure
// {
//     constructor(width,height,bg_color,color = "black")
//     {
//         super(width,height,bg_color,color)

//     }
// }

// class Circle extends Rectangle
// {
//     constructor(width,bg_color,color = "black")
//     {
//         super(width,width,bg_color,color)
//         this.style_figure += 'border-radius:50%;'

//     }
// }
// let rectangle = new Rectangle(200,100,"pink")
// rectangle.set("Rectangle")
// rectangle.create();


// let circle = new Circle(200,"orange")
// circle.set("Circle")
// circle.create();


class PrintMachine {

    constructor(FontSize, Foreground, FontFamily) {
        this.FontSize = FontSize;
        this.Foreground = Foreground;
        this.FontFamily = FontFamily;
        this.style_text = `font-size: ${FontSize}px; font-family: ${FontFamily}; color: ${Foreground};`;
    }
    print(text) {
        document.writeln(`<div style="${this.style_text}">${text}</div>`);
    }
}

let MText = new PrintMachine(20, "Blue", "Courier New");
MText.print("Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi vel veniam natus repellat ipsum aperiam corporis cumque nihil inventore.")



class PrintMachine2 {

    constructor(header, text, tagArray = 0, date) {
        this.header = header;
        this.text = text;
        let tagstring = "";
        for (let i = 0; i < tagArray.length; i++) {
            tagstring += tagArray[i];

        }
        const now = new Date();
        const dateToCheck = new Date(date)
        now.setHours(0, 0, 0, 0);
        dateToCheck.setHours(0, 0, 0, 0);
        const diffMs = now - dateToCheck;
        const diffDays = diffMs / (1000 * 60 * 60 * 24);
        this.tagArray = tagstring;
        if (diffDays === 0) {
            this.date = "сьогодні"
        }
        else if (diffDays > 0 && diffDays < 7)
        {
            this.date = `${Math.floor(diffDays)} днів тому`;
        }
        else
        {
            this.date = date;
        }

    }
    print() {
        document.writeln(`<article style="border: 6px solid #b8b8b8; height: auto; width: 300px;">
            <h2 style="margin:10px; font-family:Arial;"  >${this.header}</h2>
            <div style="margin:10px; font-family:Arial;">${this.date}</div>
            <div style="margin:10px; font-family:Arial;">${this.text}</div>
            <div style="margin:10px; font-family:Arial;">${this.tagArray}</div>

            </article>`)


    }
}
let tags = ["#lorem", "#ipsum", "#text"];
let MText2 = new PrintMachine2("What is Lorem Ipsum?", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum dolor modi quasi eveniet dolore sint iste, nostrum illum earum?", tags, "2025.5.20");
MText2.print();