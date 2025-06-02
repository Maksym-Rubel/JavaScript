//Task 1
const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}





//Task 2
for (let i = 0; i < 10; i++) {
    console.log(`[${i}] - ${arr[i]}`);
}

//Task 3
console.log("Found:", arr.find((n) => n % 7 == 0));


//Task 4
arr.sort((a, b) => b - a);
console.log("Sorted with custom func:", arr);


//Task 5
arr.fill(0, Math.floor(arr.length/2), arr.length);
console.log("Fill:", arr);

//Task 6
arr.splice(0, 3); 
console.log("After remove:", arr);

//Task 7
const filtered = arr.filter((a,b) => a === b);
console.log("Filtered array:", filtered);

//Task 8
const copy = arr.slice(1, arr.length - 1);
console.log("Copied array:", copy);

//Task 9
console.log(arr);

let counter = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        counter++;
    }
}
console.log(counter);

//Task 9+
let arrcopy = arr.filter((a) => a % 2 == 0);
console.log(arrcopy.length)