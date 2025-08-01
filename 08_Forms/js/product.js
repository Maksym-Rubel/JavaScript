
class product {
    constructor(name, year, category, isUsed) {
        this.name = name;
        this.price = year;

        this.category = category;
        this.isUsed = isUsed;
    }

    get usedStatus() {
        return this.isUsed ? 'Yes' : 'No';
    }

    toHTMLRow() {
        return `<tr>
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>${capitalizeFirstLetter(this.category)}</td>
                    <td>${this.usedStatus}</td>
                </tr>`;
    }
}

function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
