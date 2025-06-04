
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("product-list");
const clearBtn = document.getElementById("clearAllBtn");

const form = document.forms.productForm;
const nameInput = form.name;
const priceInput = form.price;
const categoryInput = form.category;
const isUsedInput = form.used;

addBtn.onclick = (event) => {
    event.preventDefault();
    if (nameInput.value != "Введіть модель" &&  nameInput.value != "" && priceInput.value > 0) {
        const item = new product(
            nameInput.value,
            priceInput.value,
            categoryInput.value,
            isUsedInput.checked
        );
        tableBody.innerHTML += item.toHTMLRow();
    }
    else
    {
        alert("Error value")
    }
    
}


clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}

