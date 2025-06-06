// let newWindow = window.open('', '', 'width=410,height=410');

// setTimeout(function(){
//     if(newWindow)
//     {
//         newWindow.resizeTo(500,500)
//     }
// },2000)

// setTimeout(function(){
//     if(newWindow)
//     {
//         newWindow.moveTo(200,200)
//     }
// },4000)

// setTimeout(function(){
//     if(newWindow)
//     {
//         newWindow.close()
//     }
// },6000)


////////////////////////////////////////////////////////////

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours())
    const minutes = String(now.getMinutes())

    document.getElementById('time').textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
}

setInterval(updateTime, 1000);
updateTime();


