// let counterAnswers = 0;
// let checked1 = false;
// let checked2 = false;

// const yesInput = document.querySelector('input[name="yes"]');
// const noInput = document.querySelector('input[name="no"]');
// const yesInput1 = document.querySelector('input[name="yes1"]');
// const noInput1 = document.querySelector('input[name="no1"]');

// const nextBtn = document.getElementById("nextBtn");
// const finishBtn = document.getElementById("finishBtn");
// const divform = document.getElementById("divform");


// nextBtn.onclick = (event) => {
//     event.preventDefault();
//     if (!checked1) {
//         if (yesInput.checked && !noInput.checked) {
//             counterAnswers++;
//             checked1 = true;
//         } else if (noInput.checked && !yesInput.checked) {
//             checked1 = true;
//         } else {
//             alert("Виберіть одну відповідь у першому питанні");
//             return;
//         }


//     }
// };


// finishBtn.onclick = (event) => {
//     event.preventDefault();
//     if (!checked2) {
//         if (noInput1.checked && !yesInput1.checked) {
//             counterAnswers++;
//             checked2 = true;
//         } else if (yesInput1.checked && !noInput1.checked) {
//             checked2 = true;
//         } else {
//             alert("Виберіть одну відповідь у другому питанні");
//             return;
//         }
//     }

//     divform.innerHTML = `<h3>Результат: ${counterAnswers} правильних відповідей з 2</h3>`;
// };



const bold = document.getElementById('bold');
const underline = document.getElementById('underline');
const italic = document.getElementById('italic');
const alignmentRadios = document.getElementsByName('align');
const textdiv = document.getElementById("textdiv");
const textBox = document.getElementById("textBox");

const finishBtn1 = document.getElementById("finishBtn1");



finishBtn1.onclick = (event) => {
    event.preventDefault();
    let selectedAlign = 'left';

    alignmentRadios.forEach(radio => {
        if (radio.checked) {
            selectedAlign = radio.value;
        }
    });

    textdiv.innerHTML = `<p style="font-weight: ${bold.checked ? "bold" : "normal"}; text-decoration:${underline.checked ? "underline" : "none"} ; font-style: ${italic.checked ? "italic" : "normal"}; text-align: ${selectedAlign};">${textBox.value}</p>`;
}


