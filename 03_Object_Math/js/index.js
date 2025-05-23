



// function Car(model,year)
// {
//     this.model = model;
//     this.year = year;
//     this.print = function(){console.log(this.model,this.year)}
// }
// let ford = new Car("Ford",2000)
// let bmw = new Car("Bmw",2020)

// console.log(ford)
// console.log(bmw)


// Car.prototype.color = "black"

// Car.prototype.getAge = function()
// {
//     return new Date().getFullYear() - this.year
// }


// ford.color = "pink"
// console.log(bmw.color)
// console.log(ford.color)


// let ford = Object.create({
//     calculeteDistancePerYear:
//     function()
//     {
//         // console.log(this.age / this.distance)
//         Object.defineProperty(this,"distanceYear",
//             {
//                 value:this.distance / this.age,
//                 writable:false,
//                 configurable:false,
//                 enumerable:false
//             }
//         )
        
//     }
// },
// {
//     model:
//     {
//         value:"Ford",
//         writable:false,
//         configurable:false,
//         enumerable:true
//     },
//     year:
//     {
//         value:2002,
//         writable:false,
//         configurable:false,
//         enumerable:true
//     },
//     distance:
//     {
//         value:1234,
//         writable:true,
//         configurable:true,
//         enumerable:false
//     },
//     age:
//     {
//         get:function()
//         {
//             console.log("get value");
//             return new Date().getFullYear() - this.year
//         },
//         set:function()
//         {
//             console.log("edit value age",this.age > 30)
//         }
//     }


// })
// console.log(ford)
// // for (const key in ford) {
// //     document.writeln(`<p> ${key} : ${ford[key]}</p>`)
// // }

// console.log(Object.keys(ford))
// Object.keys(ford).forEach(key => document.writeln(`<p> ${key} : ${ford[key]}</p>`))


// function print(a)
// {
//     Object.keys(ford).forEach(key => document.writeln(`<p> ${key} : ${ford[key]}</p>`))
// }


// let str = "Hello World";
// console.log(str,"  str[]0  ",str[0])
// console.log(str,"  indexof ",str.indexOf("W"))


// console.log()



// let date = new Date();
// console.log("Date " ,date);
// console.log("Date getDate " ,date.getDate());
// console.log("Date getDay " ,date.getDay());
// console.log("Date getFullYear" ,date.getFullYear());
// console.log("Date getMonth" ,date.getMonth() + 1);
// console.log("Date getHours" ,date.getHours());
// console.log("Date getMinutes" ,date.getMinutes());
// console.log("Date getSeconds" ,date.getSeconds());
// console.log("Date getMilliseconds" ,date.getMilliseconds());
// console.log("Date getTime" ,date.getTime());


// date.setMonth(7)
// console.log("Date ",date)

// let hol = new Date(2025,6,19)
// console.log(hol)
// console.log(hol-date)
// let days = (hol-date) / (1000*60*60*24)
// console.log(days)


/////Math




// let number = 4.589, number2 = 4.23;
// document.writeln(`<table>`)
// document.writeln(`<tr>
//     <td> ${number}</td>
//     <td>${Math.ceil(number)} </td>
//     <td> ${number2}</td>
//     <td> ${Math.ceil(number2)}</td>

//     </tr>`)
// document.writeln(`<tr>
//     <td> ${number}</td>
//     <td>${Math.floor(number)} </td>
//     <td> ${number2}</td>
//     <td> ${Math.floor(number2)}</td>

//     </tr>`)
// document.writeln(`<tr>
//     <td> ${number}</td>
//     <td>${Math.round(number)} </td>
//     <td> ${number2}</td>
//     <td> ${Math.round(number2)}</td>

//     </tr>`)

// document.writeln(`</table>`)


// console.log(Math.min(1,5,2,3,8))






// незнаю, може по іншому треба було зробити
function Rectangle(x1,y1,x2,y2)
{
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;

}



let rect = new Rectangle(1,10,10,1)


let Task1 = (rec = new Rectangle()) =>
{
    console.log(`(${rec.x1};${rec.y1})(${rec.x2};${rec.y2})`)

}
Task1(rect)
let Task2 = (rec = new Rectangle()) =>
{
    return rec.x2-rec.x1

}
let width = Task2(rect)
console.log(width)
let Task3 = (rec = new Rectangle()) =>
{
    return rec.y1-rec.y2

}
let heigth = Task3(rect)
console.log(heigth)

let Task4 = (width,heigth) =>
{
    return width * heigth

}

console.log(Task4(width,heigth))
let Task5 = (width,heigth) =>
{
    return (width + heigth) * 2

}
console.log(Task5(width,heigth))


let Task6 = (rec = new Rectangle(),width) =>
{
    rec.x2 += width

}
Task6(rect,10)
Task1(rect)

let Task7 = (rec = new Rectangle(),heigth) =>
{
    rec.y1 += heigth

}
Task7(rect,10)
Task1(rect)


let Task8 = (rec = new Rectangle(),width,heigth) =>
{
    Task6(rec,width)
    Task7(rec,heigth)

}
Task8(rect,25,15)
Task1(rect)
let Task9 = (rec = new Rectangle(),xwidth) =>
{
    rec.x1 += xwidth
    rec.x2 += xwidth

}
Task9(rect,10)
Task1(rect)

let Task10 = (rec = new Rectangle(),ywidth) =>
{
    rec.y1 += ywidth
    rec.y2 += ywidth

}
Task10(rect,10)
Task1(rect)

let Task11 = (rec = new Rectangle(),xwidth,ywidth) =>
{
    Task9(rec,xwidth)
    Task10(rec,ywidth)
}
Task11(rect,-10,-10)
Task1(rect)

let Task12 = (rec = new Rectangle(),x,y) =>
{
    if(x > rec.x1 && x < rec.x2 && y < rec.y1 && y > rec.y2)
        return true
    else
        return false
}
console.log(Task12(rect,2,20))

