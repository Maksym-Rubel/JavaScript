// let red = document.querySelector(".red")
// let green = document.querySelector(".green")
// let blue = document.querySelector(".blue")


// red.addEventListener('click',(e)=>{
//     document.querySelector("p").style.color = "red";
//     alert("red")
//     e.stopPropagation();
// },false)
// green.addEventListener('click',(e)=>{
//     document.querySelector("p").style.color = "green";
//     alert("green")
//     e.stopPropagation();
// },false)
// blue.addEventListener('click',(e)=>{
//     document.querySelector("p").style.color = "blue";
//     alert("blue")
//     e.stopPropagation();
// },false)



// document.querySelector("a").addEventListener("click",(e)=>{
//     e.preventDefault();
// })

// document.querySelector("button").addEventListener("click",(e)=>{
//     e.preventDefault();
// })

// document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// })





// // let li = document.querySelectorAll("ul li");
// // li.forEach(el=>{
// //     el.addEventListener("click",()=>{
// //         el.style.backgroundColor = "yellow"
// //     })
// // })



// document.querySelector("ul").addEventListener('click',(e)=>{
//     if(e.target.tagName == "LI")
//         if(e.target.style.backgroundColor == "")
//             e.target.style.backgroundColor = e.target.dataset.color
//         else
//             e.target.style.backgroundColor = ""
// })




// let div = document.createElement("div");
// div.classList.add("block")
// let p = document.createElement("p")
// p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, itaque!"
// p.setAttribute("title","test create element")
// div.append(p)
// let img = new Image();
// img.src = "data:image/jpeg;base64,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"
// img.style.width = "100%";
// div.append(img)
// let btn = document.createElement("button");
// btn.textContent = "Remove";
// div.append(btn);
// // document.body.prepend(div);
// document.querySelector(".preventDefault").before(div)
// document.querySelector(".preventDefault").after(div)

// btn.addEventListener('click',function(){
//     // this.remove();
//     this.parentElement.remove();
// })




let correntnumber = 0;
let displaynumber = document.getElementById("valueDisplay")
let container = document.getElementsByClassName("container1")

function UpdateNumber() {
    displaynumber.textContent = correntnumber
}
let buttons = document.querySelectorAll("button");


buttons[0].addEventListener('click', (e) => {
    correntnumber += 1;
    UpdateNumber();
    e.stopPropagation();
});
buttons[1].addEventListener('click', (e) => {
    correntnumber -= 1;
    UpdateNumber();
    e.stopPropagation();
});


let btn = document.createElement("button");
btn.textContent = "Add";
container[0].append(btn);
function getColor()
{
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}
btn.addEventListener('click', (e) => {
    let div = document.createElement("div");
    div.classList.add("added-div");
    div.style.backgroundColor = getColor()
    container[0].insertBefore(div, btn);
    e.stopPropagation();
});

document.querySelector(".container1").addEventListener('click', (e) => {
    
    if (e.target.tagName === 'DIV') {
        e.target.remove();
  }
});
// const pid = document.getElementsByClassName("pid")[0];
// document.querySelector(".color-picker").addEventListener('click', (e) => {
//   if (e.target.classList.contains("divcolor")) {
//     let color = e.target.dataset.color;
//     pid.style.backgroundColor = color;
//   }
// });


