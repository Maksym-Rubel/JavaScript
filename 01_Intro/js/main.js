document.body.style.backgroundColor = "Pink"

// let number = 12;
// let line = "Hello World"
// let flag = true;
// let zero = null;
// let un = undefined;
// let obj = {
//     name : "NoneName"
// }

// console.log(typeof(number), number);
// console.log(typeof(line), line);
// console.log(typeof(flag), flag);
// console.log(typeof(zero), zero);
// console.log(typeof(un), un);
// console.log(typeof(obj), obj);


//alert("Hello");

// let res = confirm("Allow cookies")
// res ? document.body.style.backgroundColor = "green" : document.body.style.backgroundColor = "red";

// let name_ = prompt("Enter your name");
// console.log(name_)
// name_ == null ? console.error("Error name") : console.log("Hello " + name_);


//Унарний оператор
// a++, b--, +,-,!

// Бінарий оператор
// a + b


// Тернарний оператор 
// a ? b : c


/*
  ++a, --b
  %, / *
  + -
  a --, b++
*/

// let a = 5;
// console.log(a++);
// console.log(a)

// let a = 5, b = 3, c = 3;
// console.log(a++ + b - --c)
// --c => c = 1
// a + b => 5+3 = 8
// 8 - c = 7





// > < >= <= == != [===, !==]


// let day = parseInt(prompt("Enter day"))
// if (day === 1)
//     console.log("Monday")
// else if (day === 2)
//     console.log("Tuesday")
// else
//     console.log("Error day")


// let number = prompt("Enter number");
// if(number >= 0 && number <= 20)
//     console.log("OK")
// else
//     console.error("Error")

// let day = +prompt("Enter number");
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.error("Error");
//         break;
// }

// let month = +prompt("Enter month")
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//     case 2:
//         let year = +prompt("Enter year")
//         let res = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
//         console.log(res + " days")
//         break;
//     default:
//         console.error("Error number month")
//         break;

// }

// let day = +prompt("enter day")
// let month = +prompt("enter");
// let sum_days = day;
// switch (month) {
//     case 11:
//         sum_days += 30;
//     case 10:
//         sum_days += 31;
//     case 9:
//         sum_days += 30;
//     case 8:
//         sum_days += 31;
//     case 7:
//         sum_days += 31;
//     case 6:
//         sum_days += 30;
//     case 5:
//         sum_days += 31;
//     case 4:
//         sum_days += 30;
//     case 3:
//         sum_days += 31;
//     case 2:
//         sum_days += 28;
//     case 1:
//         sum_days += 31;
// }
// console.log(sum_days)




//Task 1
// let number = +prompt("Enter number")
// if(number > 0)
//     console.log("Dadtne")
// else if(number == 0)
// {
//     console.log("is null")
// }
// else if(number < 0)
//     console.log("Vidyemne")

// let Age = +prompt("Enter age")
// if(Age >= 0 && Age <= 120)
//     console.log("Good")

// let number2 = +prompt("Enter age")
// if(number < 0)
//     console.log(number * -1)
// else
//     console.log(number)

// let hours = +prompt("Enter hours")
// let min = +prompt("Enter min")
// let sec = +prompt("Enter sec")
// if(hours >= 0 && hours <= 24 && min >= 0 && min <= 60 && sec >= 0 && sec <=60)
// {
//     console.log("all good")
// }


// let x = +prompt("Enter x")
// let y = +prompt("Enter y")

// if(x > 0 && y > 0)
// {
//     console.log("I")
// }
// else if(x < 0 && y > 0)
// {
//     console.log("II")
// }
// else if(x < 0 && y < 0)
// {
//     console.log("III")
// }
// else if(x > 0 && y < 0)
// {
//     console.log("IV")
// }
// else if(x == 0 && y != 0)
// {
//     console.log("na osi x")
// }
// else if(x != 0 && y == 0)
// {
//     console.log("na osi y")
// }
// else if(x == 0 && y == 0)
// {
//     console.log("na pochatku")
// }

//Task 2

let month = +prompt("enter");

switch (month) {
    case 12:
        console.log("December")
        break;
    case 11:
        console.log("November")
        break;
    case 10:
        console.log("October")
        break;
    case 9:
        console.log("September")
        break;
    case 8:
        console.log("August")
        break;
    case 7:
        console.log("July")
        break;
    case 6:
        console.log("June")
        break;
    case 5:
        console.log("May")
        break;
    case 4:
        console.log("April")
        break;
    case 3:
        console.log("March")
        break;
    case 2:
        console.log("February")
        break;
    case 1:
        console.log("January")
        break;
}


let number1 = +prompt("Enter number1")
let number3 = +prompt("Enter y")
let diya = prompt("enter")

switch (diya) {
    case "+":
        console.log(number1 + number3)
        break;
    case "-":
        console.log(number1 - number3)
        break;
    case "*":
        console.log(number1 * number3)
        break;
    case "/":
        console.log(number1 / number3)
        break;
}




let number4 = +prompt("Enter number1")
let number5 = +prompt("Enter number2")

if (number4 > number5) {
    console.log(number4)
}
else if (number4 < number5) {
    console.log(number5)
}
else if (number4 == number5) {
    console.log("Rivni")
}


let number6 = +prompt("Enter number1")

if (number6 % 5 == 0) {
    console.log("number kratne 5")
}
if (number6 % 5 != 0) {
    console.log("ne kratne 5")
}



let planeta = prompt("enter planetu")

if (planeta == "Земля" || planeta == "земля") {
    console.log("Привіт, землянине!")
}
else {
    console.log("Привіт, інопланетянине!")
}