
// const stock = {
//     apple: 10,
//     banana: 0,
//     orange: 5,
// };

// function checkStock(product) {
//     return new Promise((resolve, reject) => {
//         if (stock[product] > 0) {
//             resolve(`Product ${product} is in stock`);
//         }
//         else
//             reject(`Product ${product} is out of stock`)
//     })
// }



// checkStock("apple")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// checkStock("banana")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))





// function fetchUser(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id === 1) {
//                 resolve({ id: 1, name: "John Doe" })
//             }
//             else if (id !== 1) {
//                 reject(new Error("User not found"));
//             }
//         }, 2000)

//     })
// }


// fetchUser(1)
//     .then(res => { console.log(`User ${res.id} ${res.name}`) })
//     .catch(err => console.log(err.message))

// fetchUser(2)
//     .then(res => { console.log(`User ${res.id} ${res.name}`) })
//     .catch(err => console.log(err.message))







// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "John Doe" })
//         }, 1000)

//     })
// }
// function getOrders(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId === 1) {
//                 resolve([
//                     {
//                         id:1,
//                         orderName: "Pizza"
//                     },
//                     {
//                         id:2,
//                         orderName: "Sushi"
//                     },
//                     {
//                         id:3,
//                         orderName: "Cola"
//                     }
//                 ])
//             }
//             else {
//                 reject(new Error("UserId not found"));
//             }

//         }, 1000)

//     })
// }
// function getOrdersDetails(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (orderId === 3) {
//                 resolve({ price:10.50})
//             }
//             else {
//                 reject(new Error("Order not found"));
//             }

//         }, 1000)

//     })
// }



// getUser()
//     .then(user => console.log(user))
//     .catch(err => console.log(err.message))


// getOrders(1)
//     .then(orders => console.log(orders))
//     .catch(err => console.log(err.message));


// getOrdersDetails(3)
//     .then(res => {console.log(res.price)})
//     .catch(err => console.log(err.message))


let colors = [];
function saveitems() {
    localStorage.setItem("colors", JSON.stringify(colors));
}
const $addBtn = $('#addBtn');
const $container = $('#container');
$addBtn.on('click', function () {

    let color = getRandomColor();
    colors.push(color);
    saveitems()
    localStorage.setItem("color", color);
    const $block = $('<div class="block"></div>');
    $block.css('background-color', color);
    $('#container').append($block);
});



function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


$container.on('click', `.block`, function () {
    load()
    $(this).remove();
    let color = $(this).css("backgroundColor");
    for (const i of colors) {
        console.log(i)
    }

    console.log(color)

    let index = colors.findIndex(item => item == color);
    console.log(index)
    if (index !== -1) {
        colors.splice(index, 1);
    }
    saveitems()

});

function load() {
    colors = JSON.parse(localStorage.getItem("colors")) ?? [];
}
function loadandview() {
    colors = JSON.parse(localStorage.getItem("colors")) ?? [];
    for (const i of colors) {
        const $block = $('<div class="block"></div>');
        $block.css('background-color', i);
        $('#container').append($block);
    }


}
document.addEventListener("DOMContentLoaded", () => {
    loadandview()
});

let btn1_id = document.getElementById("btn1")
let cir1_id = document.getElementById("cir1")
let cir2_id = document.getElementById("cir2")
let cir3_id = document.getElementById("cir3")
function load() {
    numbers = Number(localStorage.getItem("number"));
    id = numbers
}
function save() {
    localStorage.setItem("number", id.toString());
}


let id = 0
load()
TestId()
console.log(id)
btn1_id.onclick = function () {
    TestId()
    if (id != 2)
        id++
    else
        id = 0
}


function TestId() {
    cir1_id.style.backgroundColor = "gainsboro"
    cir3_id.style.backgroundColor = "gainsboro"
    cir2_id.style.backgroundColor = "gainsboro"
    if (id == 0) { cir2_id.style.backgroundColor = "yellow" }
    else if (id == 1) { cir3_id.style.backgroundColor = "green" }
    else if (id == 2) { cir1_id.style.backgroundColor = "red" }
    save()
}