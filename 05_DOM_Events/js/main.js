// // // console.log(document.body);
// // // document.body.style.color = "red"

// // console.log(document.getElementById("text"))
// // console.log(p_id)
// // p_id.style.backgroundColor = "yellow";
// // p_id.style.padding = "10px";

// // let list_class = document.getElementsByClassName("style_text")
// // console.log(list_class)




// // let p_el = document.getElementsByTagName("p");
// // console.log(p_el)

// // let last_li = document.querySelector("ul li:last-child")
// // last_li.style.color = "purple"
// // console.log(last_li)

// // let ood_li = document.querySelector("ul li:nth-child(odd)")
// // console.log(ood_li)

// // odd_li.forEach((el) => {
// //     el.style.color = "white";
// //     el.style.backgroundColor = "black";
// //     el.style.padding = "10px";
// // })


// // console.log(p_id.className)



// // // setTimeout(()=>{
// // //     // p_id.className = "test_class"
// // //     p_id.classList.add("test_class")
// // //     p_id.classList.remove()
// // // },3000)

// // let flag = true;
// // p_id.onclick = function()
// // {
// //     if(flag)
// //     {
// //         this.classList.add("test_class")
// //         flag = false;
// //     }
// //     else{
// //         this.classList.remove("test_class")
// //         flag = true;
// //     }
    
// // }

// console.log(document.querySelector("#wrapper").lastElementChild)
// let btn = document.querySelector("#wrapper").lastElementChild;
// btn.addEventListener("click", () => {
//     document.querySelector(".top").classList.add("show")
// }
// )

// document.querySelector(".top").firstElementChild.addEventListener("click", () => { 
//     document.querySelector(".top").classList.remove("show")
// })


// document.querySelector(".top").addEventListener("mousemove",function(e){
//    this.style.color = "white";
//    this.innerHTML = `
//     ${e.clientX}x ${e.clientY}y <br>
//     ${e.offsetX}x ${e.offsetY}y <br>
//     ${e.pageX}x ${e.pageY}y <br>
//    `
// })


let text1 = document.getElementById("text1");

let btn = document.querySelector(".wrapper").lastElementChild;
btn.onclick = function () {
    const randomNumber = Math.floor(Math.random() * 101);
    text1.textContent = randomNumber;
  }

let btn1 = document.querySelector(".wrapper1").firstElementChild;
let text2 = document.getElementById("text2");
btn1.onclick = function () {
    if(text2.style.display == "none")
    {
        text2.style.display = "block";
    }   
    else
    {
        text2.style.display = "none";
    }
  }


// let list_class = document.getElementsByClassName("tab")
// let list_htmljscss = document.getElementsByClassName("htmljscss")


// list_class[0].onclick = function() {
//   list_htmljscss[0].style.display = "block";
//   list_htmljscss[1].style.display = "none";
//   list_htmljscss[2].style.display = "none";
// }

// list_class[1].onclick = function() {
//   list_htmljscss[0].style.display = "none";
//   list_htmljscss[1].style.display = "block";
//   list_htmljscss[2].style.display = "none";
// }

// list_class[2].onclick = function() {
//   list_htmljscss[0].style.display = "none";
//   list_htmljscss[1].style.display = "none";
//   list_htmljscss[2].style.display = "block";
// }

