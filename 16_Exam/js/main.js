
// function takeHeight() {
//     for (let i = 0; i < $(".container").children().length; i++) {
//         height[i] = $(".container").children().eq(i).height();
//     }
// }
// let height = [];
// takeHeight();
// let index = 0;
// console.log(height[0]);
// document.addEventListener("wheel", function (event) {
//     if (event.deltaY < 0) {
//         $(".container").children().eq(index).removeClass("hidden");
//         $("#rec").children().eq(index).removeClass("hidden-text");
//         if(index == 0)
//         {
//             $("#rec1").show()
//         }
        
//         if (index > 0 && $(".container").children().eq(index).height() == height[index]) {
//             index--;
//         }
//         if ($(".container").children().eq(index).height() <= height[index]) {
//             $(".container").children().eq(index).css("height", "+=25px");
//         }
        


//     } else {
//         $(".container").children().eq(index).css("height", "-=25px");
//         if ($(".container").children().eq(index).height() === 0) {
//             $(".container").children().eq(index).addClass("hidden");
//             $("#rec").children().addClass("hidden-text");
//             $("#rec1").hide()
//             index++;
            
//         }
//     }
// });