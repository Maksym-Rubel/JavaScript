

// Task 1
// let age = +prompt("Enter your age");
// if (age >= 0 && age <= 12)
//     console.log("Ти дитина")
// else if (age > 12 && age <= 18)
//     console.log("Ти підліткок")
// else if (age > 18 && age <= 60)
//     console.log("Ти доросла")
// else if (age > 60)
//     console.log("Ти пенсіонер")

// // Task 2
// let number = +prompt("Ente number 1-9");
// switch (number) {
//     case 1:
//         console.log("!");
//         break;
//     case 2:
//         console.log("@")
//         break;
//     case 3:
//         console.log("#")
//         break;
//     case 4:
//         console.log("$")
//         break;
//     case 5:
//         console.log("%")
//         break;
//     case 6:
//         console.log("^")
//         break;
//     case 7:
//         console.log("&")
//         break;
//     case 8:
//         console.log("*")
//         break;
//     case 9:
//         console.log("(")
//         break;

// }

// // Task 3
// let number3 = +prompt("Ведіть трьохзначне число");
// //123 % 123 % 100
// let n1 = number3 % 10 % 10
// let n2 = parseInt(number3 / 10 % 10)
// let n3 = parseInt(number3 / 10 / 10 % 10)


// if(n1 == n2 || n2 == n3 || n3 == n1 || n1 == n2 == n3)
// {
//     console.log("Є")
// }



// // Task 4
// let year = +prompt("Ведіть рік");
// let res = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? console.log("Висоскосний") : console.log("Не високосний");



// // Task 5
// let number5 = +prompt("Ведіть п'ятизначне число");

// let nn1 = number5 % 10 % 10
// let nn2 = parseInt(number5 / 10 % 10)
// let nn3 = parseInt(number5 / 10 / 10 % 10)
// let nn4 = parseInt(number5 / 10 / 10 / 10 % 10)
// let nn5 = parseInt(number5 / 10 / 10 / 10 / 10 % 10)

// console.log(nn1)
// console.log(nn2)
// console.log(nn3)
// console.log(nn4)
// console.log(nn5)

// if(nn2 == nn4 && nn1 == nn5)
// (
//     console.log("Число є паліндлмом")
// )
// else
//     console.log("Не паліндор")


// // Task 6
// let usd_money = +prompt("Ведіть гроші");
// let choice = prompt("Ведіть в шо перевести UAH/EUR");

// if(choice == "UAH" || choice == "uah")
//     console.log(usd_money * 41.4)
// else if(choice == "EUR" || choice == "eur")
// console.log(usd_money * 0.9)

// // Task 7
// let suma_buy_zni
// let suma_buy = +prompt("Ведіть суму");
// if (suma_buy >= 200 && suma_buy <= 300) {
//     suma_buy_zni = suma_buy - suma_buy / 100 * 3
//     console.log(suma_buy_zni)
// }
// else if (suma_buy > 300 && suma_buy <= 500) {
//     suma_buy_zni = suma_buy - suma_buy / 100 * 5
//     console.log(suma_buy_zni)
// }
// else if (suma_buy > 500) {
//     suma_buy_zni = suma_buy - suma_buy / 100 * 7
//     console.log(suma_buy_zni)
// }

// // Task 8
// let kolo_width = +prompt("Ведіть довжину кола")
// let diamtr = kolo_width / Math.PI / 2;
// let Square_perymetr = +prompt("Ведіть периметр квадрата")

// if (diamtr < Square_perymetr / 4) {
//     console.log("kolopomistunmcz")
// }
// else
//     console.log("ne pomitutsa")

// // Task 9
// let counter = 0
// let putania1 = prompt("Яка столиця Франції? (Мадрид,Париж,Берлін)")
// if (putania1 == "Париж")
//     counter += 2
// let putania2 = +prompt("Скільки планет у Сонячній системі? (8,9,7)")
// if (putania2 == "8")
//     counter += 2
// let putania3 = prompt("Хто написав Кобзар? (Іван Франко,Леся Українка,Тарас Шевченко)")
// if (putania3 == "Тарас Шевченко")
//     counter += 2
// console.log(counter)


// // Task 10

let day = +prompt("Ведіть день")
let month = +prompt("Ведіть місяць")
let year = +prompt("Ведіть рік")
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
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
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
else if (day < days)
{
    day += 1
}
console.log(day + "." + month + "." + year)
