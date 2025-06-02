//Task 1
const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}





// //Task 2
// for (let i = 0; i < 10; i++) {
//     console.log(`[${i}] - ${arr[i]}`);
// }

// //Task 3
// console.log("Found:", arr.find((n) => n % 7 == 0));


// //Task 4
// arr.sort((a, b) => b - a);
// console.log("Sorted with custom func:", arr);


// //Task 5
// arr.fill(0, Math.floor(arr.length/2), arr.length);
// console.log("Fill:", arr);

// //Task 6
// arr.splice(0, 3); 
// console.log("After remove:", arr);

// //Task 7
// const filtered = arr.filter((a,b) => a === b);
// console.log("Filtered array:", filtered);

// //Task 8
// const copy = arr.slice(1, arr.length - 1);
// console.log("Copied array:", copy);

// //Task 9
// console.log(arr);

// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         counter++;
//     }
// }
// console.log(counter);

//Task 9+
let arrcopy = arr.filter((a) => a % 2 == 0);
console.log(arrcopy.length)




//Task 1
let word = "hello World  ";
let spaces = word.split('').filter((a) => a === " ")
console.log("Space ", spaces.length)


//Task 2
let wordUp = word[0].toUpperCase() + word.slice(1);
console.log(wordUp);


//Task 3
let words = word.trim().split(' ');
console.log(words.length)

//Task 4
let myfunc = (a)=>
{
    let words1 = text.trim().split(' ');
    let text1 = words1[0].at(0) + words1[1].at(0) + words1[2].at(0)
    console.log(text1.toUpperCase())

}

let text = "cascading style sheets"
myfunc(text)

//Task 5
let palin = "12345678987654321"
let palindrome = true
for (let i = 0; i < palin.length; i++) {
    if (palin[i] !== palin[palin.length - 1 - i]) {
        palindrome = false
    }
}
console.log(palindrome)

let url1 = "https://itstep.org/ua/about"

let urls = url1.split("/")

console.log("Протокол:", urls[0].slice(0,urls.length))
console.log("Домен:", urls[2])



