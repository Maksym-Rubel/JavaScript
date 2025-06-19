
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

function save(city) {
    localStorage.setItem("city", city)
}
function Load() {
    return localStorage.getItem("city");
}


let indexspan = $("#IndexSpan");

async function getCoord(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4f9129c72ecbcc4ec3898a5d66138d0`);
    let data = await response.json()

    let coodrs = []

    coodrs.push(data.coord.lon);
    coodrs.push(data.coord.lat);


    return coodrs;
}

function getDayT(num) {
    switch (num) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 0:
            return "Sunday"
    }
}
let dayscoll = $(".dayscoll");
async function getForecast(coords) {
    console.log(coords[0]);
    console.log(coords[1]);
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords[1]}&longitude=${coords[0]}&daily=uv_index_max,apparent_temperature_max,apparent_temperature_min,weather_code&timezone=auto&forecast_days=14`);
    let data = await response.json();

    let time = new Date();
    let daycound = time.getDay();
    dayscoll.html("");


    let tempsm = data.daily.apparent_temperature_max;
    let tempsmin = data.daily.apparent_temperature_min;
    let image = data.daily.weather_code;
    let tmax = [...tempsm];
    let tmin = [...tempsmin];
    let img = [...image];



    for (let i = 0; i < 9; i++) {
        if (daycound === 7) {
            daycound = 0;
        }




        console.log(img[0]);
        console.log(getIconCode(img[0]));
        dayscoll.append(`<div class="daycollumn">
                        <p class="coltext">${getDayT(daycound).slice(0, 2)}</p>
                        <img src="${getIconCode(img[i])}" alt="" class="miniIcons">
                        <p class="coltext1">${Math.floor(tmax[i]) < 10 ? "0" + Math.floor(tmax[i]) : Math.floor(tmax[i])}°</p>
                        <p class="coltext2">${Math.floor(tmin[i]) < 10 ? "0" + Math.floor(tmin[i]) : Math.floor(tmin[i])}</p>
                    </div>`)

        daycound++;


    }

    indexspan.html(data.daily.uv_index_max[0].toFixed(1));
}
function getIcon(main, currentHoures = 25) {
    if (currentHoures >= 22 && currentHoures <= 24 || currentHoures <= 4) {
        return "./img/night.png";
    }
    else {
        switch (main) {
            case "Clear":
                return "./img/sunns.png";
            case "Clouds":
                return "./img/cloudyFinal.png";
            case "Thunderstorm":
                return "./img/lightning1.png";
            case "Drizzle":
                return "./img/fallrain.png";
            case "Rain":
                return "./img/fallrain.png";
            case "Snow":
                return "./img/snow.png";
        }
    }

}
function getIconCode(main) {
    if (main === 0 || main === 1 || main === 3) return "./img/sunns.png";
    else if ([2, 45, 48].includes(main)) return "./img/cloudyFinal.png";
    else if ([95, 96, 99].includes(main)) return "./img/lightning1.png";
    else if ([51, 53, 55, 56, 57].includes(main)) return "./img/fallrain.png";
    else if ([61, 63, 65, 66, 67, 80, 81, 82].includes(main)) return "./img/fallrain.png";
    else if ([71, 73, 75, 77, 85, 86].includes(main)) return "./img/snow.png";
}


let temp = $("#TempSpan");
let feel = $("#FeelSpan");
let wind = $("#WindSpan");
let rain = $("#RainSpan");
let img = document.getElementById("spanimage");
let citys = $("#CitySpan");

let defaultCity = Load();

async function getWeather(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=d4f9129c72ecbcc4ec3898a5d66138d0`);
    let data = await response.json();
    let time = new Date();
    let hours = time.getHours();
    img.src = getIcon(data.weather[0].main, hours);
    citys.html(city[0].toUpperCase() + city.slice(1))
    wind.html(data.wind.speed.toFixed(1))
    rain.html(data.main.humidity)
    feel.html(Math.floor(data.main.feels_like))
    temp.html(Math.floor(data.main.temp))

}

let hours = $("#hoursWeather")
async function getWeatherHours(city) {
    let response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=d4f9129c72ecbcc4ec3898a5d66138d0&units=metric`);
    let data = await response.json();
    let time = new Date();

    function StartTime() {
        time.getHours()
        const currentHour = time.getHours().toString().padStart(2, '0');
        let month = time.getMonth() + 1 <= 9 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
        let datetime = time.getFullYear() + "-" + month + "-" + time.getDate() + " " + currentHour;

        for (const element of data.list) {
            const timeStr = element.dt_txt;
            if (timeStr.includes(datetime)) {
                console.log(`Match found at ${timeStr}`, element);
                return element
            }
        }




    }
    let fisrttime = StartTime();
    hours.html("");
    let findex = data.list.findIndex(element => element.dt_txt === fisrttime.dt_txt);
    for (let i = findex; i <= 9; i++) {
        let datat = data.list[i];
        let dtString = datat.dt_txt;
        let currentHour = dtString.split(" ")[1].split(":")[0];
        console.log(currentHour)
        const currentHourNow = time.getHours().toString().padStart(2, '0');
        let iconUrl;


        let string = currentHour.toString();
        let currentHour2 = string.startsWith('0') ? string.slice(1) : string;
        console.log(currentHour2);
        if (currentHour2 >= 22 || currentHour2 <= 4) {
            iconUrl = "./img/night.png";
        }
        else {
            iconUrl = getIcon(datat.weather[0].main);
        }

        hours.append(`<div class="weathertab">
            <p id="tabtext">${currentHour == currentHourNow ? "Now" : currentHour}</p>
            <p id="tabtext2">${Math.floor(datat.main.temp)}°C</p>
            <img src="${iconUrl}" class="miniIcons" />
        </div>
        `)
    }

}

let search = $(".searchpole");

search.on("keydown", function (event) {
    if (event.key == "Enter" && search.val() !== "") {
        getCoord(search.val()).then(coords => {
            getForecast(coords);
        });
        getWeather(search.val());
        getWeatherHours(search.val());
        save(search.val());

    }
});
getCoord(defaultCity).then(coords => {
    getForecast(coords);
});
getWeather(defaultCity);
getWeatherHours(defaultCity);



let light = true;
const link = document.querySelector('link[rel="stylesheet"]');
$("#themechenger").on("click", function () {
    if (light) {
        link.setAttribute('href', './css/darkMain.css');
        light = false;
    }
    else {
        link.setAttribute('href', './css/main.css');
        light = true;
    }
});
