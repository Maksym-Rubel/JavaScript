let newWindow = window.open('', '', 'width=410,height=410');

setTimeout(function(){
    if(newWindow)
    {
        newWindow.resizeTo(500,500)
    }
},2000)

setTimeout(function(){
    if(newWindow)
    {
        newWindow.moveTo(200,200)
    }
},4000)

setTimeout(function(){
    if(newWindow)
    {
        newWindow.close()
    }
},6000)


////////////////////////////////////////////////////////////
function SelectSec(){
    const now = new Date();
    const seconds = String(now.getSeconds());


    return seconds * 6;
}
angle = 360 / 60;
angleadd = SelectSec();
const clock = document.getElementById('simg1');
function updateTime() {
    
    clock.style.transform = `rotate(${angleadd += angle}deg)`;
    
}

setInterval(updateTime, 1000);
updateTime();


