const palette = document.getElementById('palette');
const nameError = document.getElementById('nameError');
const codeError = document.getElementById('codeError');
const saveBtn = document.getElementById('saveBtn');
const colorType = document.getElementById('colorType');
const colorName = document.getElementById('colorName');
const colorCode = document.getElementById('colorCode');

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (colorType.value === "RGB" && colorName.value !== "" && colorCode.value !== "") {
        let rgbValues = colorName.value.split(',');
        if (rgbValues.length === 3 && rgbValues[0] <= 255 && rgbValues[1] <= 255 && rgbValues[2] <= 255) {
            palette.innerHTML += `<div class="color-box" style="background-color: rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})">
            ${colorCode.value}<br>${colorType.value}<br>${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}
        </div>`
        }
    }
    else if (colorType.value === "RGBA" && colorName.value !== "" && colorCode.value !== "") {
        let rgbValues = colorName.value.split(',');
        if (rgbValues.length === 4 && rgbValues[0] <= 255 && rgbValues[1] <= 255 && rgbValues[2] <= 255 && rgbValues[3] >= 0 && rgbValues[3] <= 1) {
            palette.innerHTML += `<div class="color-box" style="background-color: rgba(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]},${rgbValues[3]})">
            ${colorCode.value}<br>${colorType.value}<br>${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${rgbValues[3]}
        </div>`
        }
    }
    else if (colorType.value === "HEX" && colorName.value !== "" && colorCode.value !== "") {
        let rgbValues = colorName.value
        if (rgbValues.startsWith('#') && (rgbValues.length === 7 || rgbValues.length === 9)) {
            palette.innerHTML += `<div class="color-box" style="background-color: ${rgbValues}">
            ${colorCode.value}<br>${colorType.value}<br>${rgbValues}
        </div>`
        }
    }
    else if(colorName.value === "" || colorCode.value === "") {
        if (colorName.value === "") {
            nameError.textContent = "Color name is required.";
        } else {
            nameError.textContent = "";
        }
        if (colorCode.value === "") {
            codeError.textContent = "Color code is required.";
        } else {
            codeError.textContent = "";
        }
    }
});