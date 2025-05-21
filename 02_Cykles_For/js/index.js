
// let i = 0;
// while(i < 10)
// {
//     // i++;
//     document.write(`<p style = "font-size:14px;"> Item ${++i} </p>`);

// }

// let res;
// do
// {
//     res = prompt("2 + 2 = ?")
// } while(res != 4);

// let i = 10; 
// while(i >= 0)
// {
//     alert(i--)
// }
// document.write("<img src = 'https://media.tenor.com/1ut6ffLeqSYAAAAM/nuclear-mushroom.gif'>")


// for (let i = 0; i < 10; i++)
// {
//     document.write(`<p style = "font-size:14px;"> Item ${i} </p>`);
// }


// for (let i = 0; i < 10;)
// {
//     document.write(`<p style = "font-size:14px;"> Item ${++i} </p>`);
// }

// let i;
// for (i = 0; ; )
// {
//     res = prompt("2 + 2 = ?");
//     ++i
//     if(res == 4)
//         break;
// }
// console.log(i);

// for (let i = 0; i < 5; i++) {
//     let color = prompt("Enter color");
//     if(color.length < 5)
//         continue

//     document.write(`<p style = "font-size:18px; background-color:${color}; padding `)

// }


// function sum(a,b)
// {
//     console.log(`${a} + ${b} = ${a + b}`);


// }

// sum(2,5)

// let getSecond = minutes => minutes * 60;
// console.log(getSecond(3),"sec")

// let sum = (a,b,c,d = 0,e = 0) =>
// {
//     return a + b + c + d + e
// }
// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3));




// let sum = (...args) => {
//     let sum = 0;
//     for (let i = 0; i = args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5));\


// let factorial = (n) =>
// {
//     if(n == 1 || n == 0) return 1
//     return n * factorial(n - 1);

// }
// console.log(factorial(5));


// let colors = new Array("red","lime","gold","purple","magenta");
// let colors = ["red","lime","gold","purple","magenta"];

// console.log(colors)

// for (let i = 0; i < colors.length; i+2) {
//    document.write(`<li style = "border: solid 3px ${colors[index]}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${colors[index]} </li>`)

// }

// document.write("<ol>")
// for (const color of colors) {
//    document.write(`<li style = "border: solid 3px ${colors[index]}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${colors[index]} </li>`)

// }
// document.write("</ol>")

// let print = (arr,text = "") => {
//     if(text.length > 0)
//     {
//         document.write(`<h2 style = "text-align:center;"> ${text} </h2>`)
//     }
//     document.write("<ol>")

// }


// Task 1
let max = (a, b) => a > b ? a : b
console.log(max(4, 5));

// Task 2
let stepin = (a, b) => a ** b
console.log(stepin(2, 3));

let calc = (nn1, nn2, diya) => {
    switch (diya) {
        case "+":
            return nn1 + nn2;
            break;
        case "-":
            return nn1 - nn2;
            break;
        case "/":
            return nn1 / nn2;
            break;
        case "*":
            return nn1 * nn2;
            break;
    }
}
// Task 3
console.log(calc(2, 3,"*"));


// Task 4

let ProsteNum = (nn1) => {
    let IsPrime = true;
    for(i = 2; i <= nn1/2; i++)
    {
        if(nn1 % i == 0)
        {
            IsPrime = false
        }
    }
    if(IsPrime == true)
    {
        console.log(`${nn1} is prime`)
    }
    else
    {
        console.log(`${nn1} no prime`)
    }
}

ProsteNum(97);

// Task 5

let Tablemnoz = (nn1) => {
    for(i = 2; i <= 9; i++)
    {
        console.log(`${nn1} * ${i} = ${nn1 * i}`)
    }
    
}

Tablemnoz(3);