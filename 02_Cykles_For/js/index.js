
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


// // Task 1
// let max = (a, b) => a > b ? a : b
// console.log(max(4, 5));

// // Task 2
// let stepin = (a, b) => a ** b
// console.log(stepin(2, 3));

// let calc = (nn1, nn2, diya) => {
//     switch (diya) {
//         case "+":
//             return nn1 + nn2;
//             
//         case "-":
//             return nn1 - nn2;
//            
//         case "/":
//             return nn1 / nn2;
//             
//         case "*":
//             return nn1 * nn2;
//             
//     }
// }
// // Task 3
// console.log(calc(2, 3,"*"));


// // Task 4

// let ProsteNum = (nn1) => {
//     let IsPrime = true;
//     for(i = 2; i <= nn1/2; i++)
//     {
//         if(nn1 % i == 0)
//         {
//             IsPrime = false
//         }
//     }
//     if(IsPrime == true)
//     {
//         console.log(`${nn1} is prime`)
//     }
//     else
//     {
//         console.log(`${nn1} no prime`)
//     }
// }

// ProsteNum(97);

// // Task 5

// let Tablemnoz = (nn1) => {
//     for(i = 2; i <= 9; i++)
//     {
//         console.log(`${nn1} * ${i} = ${nn1 * i}`)
//     }

// }

// Tablemnoz(3);


//Task 6
// let prosto = (a, b) => {
//     let dil = a / b
    

// }


// Task 7
let sum = (a, b = 0, c = 0, d = 0, e = 0) => {
    return a + b + c + d + e
}
console.log(sum(1, 2, 3, 4, 5));
//Task 8
let maxfive = (...args) => {

    if (args.length > 0 && args.length <= 5) {
        let maxnum = args[0];
        for (let i = 0; i < args.length; i++) {
            if (args[i] > maxnum)
                maxnum = args[i]

        }
        return maxnum
    }
    return -1
}
console.log(maxfive(1, 2, 3, 4, 5));

//Task 9
let parnineparni = (num1, num2, boolis) => {

    if (num2 < num1) {
        let temp = num1
        num1 = num2
        num2 = temp
    }
    if (boolis === true) {
        for (let i = num1; i < num2; i++) {

            if (i % 2 == 0) {
                console.log(i)
            }
        }
    }
    else {
        for (let i = num1; i < num2; i++) {

            if (i % 2 != 0) {
                console.log(i)
            }
        }
    }
}

parnineparni(1, 20, true);



//Task 10
let testyear = (year) => year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? true : false



let date = (day, month, year) => {

    let days = 0
    switch (month) {
        case 12:
            days = 31;
            break;
        case 11:
            days = 30;
            break;
        case 10:
            days = 31;
            break;
        case 9:
            days = 30;
            break;
        case 8:
            days = 31;
            break;
        case 7:
            days = 31;
            break;
        case 6:
            days = 30;
            break;
        case 5:
            days = 31;
            break;
        case 4:
            days = 30;
            break;
        case 3:
            days = 31;
            break;
        case 2:
            if (testyear(year) == true) {
                days = 29
            }
            else
                days = 28
            break;
        case 1:
            days = 31;
            break;
    }
    if (day == days) {
        day = 1
        if (month == 12) {
            month = 1
            year += 1
        }

        else
            month += 1
    }
    else if (day < days) {
        day += 1
    }
    console.log(day + "." + month + "." + year)
}

date(28,2,2004)
