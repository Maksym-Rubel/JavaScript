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
