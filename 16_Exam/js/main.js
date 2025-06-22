function save(city) {
    localStorage.setItem("city", city)
}
function saveTheme(theme) {
    localStorage.setItem("theme", theme)
}
function Load() {
    return localStorage.getItem("city");
}
function LoadTheme() {
    return localStorage.getItem("theme");
}



let indexspan = $("#IndexSpan");
let dayscoll = $(".dayscoll");
async function getForecast(coords) {
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
        const currentHourNow = time.getHours().toString().padStart(2, '0');
        let iconUrl;
        let string = currentHour.toString();
        let currentHour2 = string.startsWith('0') ? string.slice(1) : string;
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



let light1;
let theme1 = LoadTheme();
const link = document.querySelector('link[rel="stylesheet"]');
function LoadThmeInit() {
    if(theme1 == "dark")
    {
        link.setAttribute('href', './css/darkMain.css');
        light1 = false;
    }
    else if(theme1 == "light")
    {
        link.setAttribute('href', './css/main.css');
        light1 = true;
    }
}


LoadThmeInit();


$("#thme").on("click", function () {
    if (light1) {
        link.setAttribute('href', './css/darkMain.css');        
        light1 = false;
        saveTheme("dark");
    }
    else {
        link.setAttribute('href', './css/main.css');
        light1 = true;
        saveTheme("light");
    }
});

$("#main").on("click", function () {
    console.log("")
});
$("#burger").on("click", function () {
    window.location.href = "./hmtl/index.html";
});
