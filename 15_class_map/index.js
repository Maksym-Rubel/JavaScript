const products = new Map();

products.set("Apple", 10);
products.set("Banana", 2);
products.set("Cherry", 15);
products.set("Date", 20);
products.set("Elderberry", 25);
products.set("Fig", 30);
products.set("Grape", 12);

products.forEach((value, key) => {
    if (value > 3) {
        console.log(`Product: ${key}, Count: ${value}`);
    }
});

const sortedProducts = new Map([...products.entries()].sort((a, b) => a[1] - b[1]));

console.log("--------------------------------------------------");
sortedProducts.forEach((value, key) => {

    console.log(`Product: ${key}, Count: ${value}`);

});