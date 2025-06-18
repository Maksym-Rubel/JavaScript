
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
let temp = $("#TempSpan");
let feel = $("#FeelSpan");
let wind = $("#WindSpan");
let rain = $("#RainSpan");
let img = document.getElementById("spanimage");
let citys = $("#CitySpan");

let defaultCity = "Rivne"

async function getWeather(city)
{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=d4f9129c72ecbcc4ec3898a5d66138d0`);
    let data = await response.json();
    if(data.weather[0].main == "Clouds")
    {
        img.src = "./img/cloudyFinal.png";
    }
    citys.html(city)
    wind.html(data.wind.speed.toFixed(1))
    rain.html(data.main.humidity)
    feel.html(Math.floor(data.main.feels_like))
    temp.html(Math.floor(data.main.temp))

}



let search = $(".searchpole");

search.on("keydown",function(event)
{
    if(event.key == "Enter" && search.val() !== "")
    {
        getWeather(search.val());
    }
});



getWeather(defaultCity);