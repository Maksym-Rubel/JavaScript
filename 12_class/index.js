
const stock = {
    apple: 10,
    banana: 0,
    orange: 5,
};

function checkStock(product) {
    return new Promise((resolve, reject) => {
        if (stock[product] > 0) {
            resolve(`Product ${product} is in stock`);
        }
        else
            reject(`Product ${product} is out of stock`)
    })
}



checkStock("apple")
    .then(res => console.log(res))
    .catch(err => console.log(err))
checkStock("banana")
    .then(res => console.log(res))
    .catch(err => console.log(err))





function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: "John Doe" })
            }
            else if (id !== 1) {
                reject(new Error("User not found"));
            }
        }, 2000)

    })
}


fetchUser(1)
    .then(res => { console.log(`User ${res.id} ${res.name}`) })
    .catch(err => console.log(err.message))

fetchUser(2)
    .then(res => { console.log(`User ${res.id} ${res.name}`) })
    .catch(err => console.log(err.message))







function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" })
        }, 1000)

    })
}
function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    {
                        id:1,
                        orderName: "Pizza"
                    },
                    {
                        id:2,
                        orderName: "Sushi"
                    },
                    {
                        id:3,
                        orderName: "Cola"
                    }
                ])
            }
            else {
                reject(new Error("UserId not found"));
            }

        }, 1000)

    })
}
function getOrdersDetails(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderId === 3) {
                resolve({ price:10.50})
            }
            else {
                reject(new Error("Order not found"));
            }

        }, 1000)

    })
}



getUser()
    .then(user => console.log(user))
    .catch(err => console.log(err.message))


getOrders(1)
    .then(orders => console.log(orders))
    .catch(err => console.log(err.message));


getOrdersDetails(3)
    .then(res => {console.log(res.price)})
    .catch(err => console.log(err.message))

