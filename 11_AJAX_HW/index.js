const tbody = document.getElementById("tbodys");




async function getProducts() {
    const product = await fetch("https://fakestoreapi.com/products")
    const data = await product.json();

    data.forEach(element => {
        tbody.innerHTML += `<tr>
                <td>${element.title}</td>
                <td>${element.price}</td>
                <td>${element.description}</td>
                <td>${element.rating.rate}</td>
    </tr>`;
    });


}

getProducts();


const priceHeader = document.getElementById('price-header');


let sortAsc = true;

priceHeader.onclick = () => {
    const rows = Array.from(tbody.rows);

    rows.sort((a, b) => {
        const aPrice = parseFloat(a.cells[1].textContent.trim());
        const bPrice = parseFloat(b.cells[1].textContent.trim());

        return sortAsc ? aPrice - bPrice : bPrice - aPrice;
    });

    sortAsc = !sortAsc;

    rows.forEach(row => tbody.appendChild(row)); 
}

async function searchProduct(row) 
{
    const product = await fetch("https://fakestoreapi.com/products")
    const data = await product.json();

    data.forEach(element => {
        if(element.title === row.cells[0].textContent) {
            return window.open(element.image, '_blank','<img src="' + row.image + '" alt="Product Image" style="width: 100px; height: 100px;">');
            
        }
    });
}

tbody.addEventListener('click', (event) => {
    const row = event.target.closest('tr');
    searchProduct(row);
});








