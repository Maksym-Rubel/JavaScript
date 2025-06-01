// let img1_id = document.getElementById("img1")
// let img2_id = document.getElementById("img2")


// img1_id.onclick = function(e)
// {
//     let x = e.offsetX - 100 / 2;
//     let y = e.offsetY - 100 / 2;

//     // alert(e.offsetY)
//     if(e.offsetX >= 1175 )
//     {
//         x = 1110
//     }
//     else if(e.offsetX <= 50)
//     {
//         x = 20
//     }
//     else if(e.offsetY <= 50)
//     {
//         y = 20
//     }
//     else if(e.offsetY >= 625)
//     {
//         y = 575
//     }


//     img2_id.style.position = "absolute";
//     img2_id.style.left = `${x}px`;
//     img2_id.style.top = `${y}px`;


// }

let btn1_id = document.getElementById("btn1")
let cir1_id = document.getElementById("cir1")
let cir2_id = document.getElementById("cir2")
let cir3_id = document.getElementById("cir3")

let id = 0
btn1_id.onclick = function () {
    cir1_id.style.backgroundColor = "gainsboro"
    cir3_id.style.backgroundColor = "gainsboro"
    cir2_id.style.backgroundColor = "gainsboro"
    if (id == 0) {
        id++;
        cir2_id.style.backgroundColor = "yellow"
    }
    else if (id == 1) {
        id++;
        cir3_id.style.backgroundColor = "green"
    }
    else if (id == 2) {
        id = 0;
        cir1_id.style.backgroundColor = "red"
    }
}