//Task 1
let MoreLess = (a, b) => {
    if(a > b)
        return 1
    else if (a < b)
        return -1
    else
        return 0
}
console.log(MoreLess(1,5))


//Task 2
let factorial = (n) =>
{
    if(n == 1 || n == 0) return 1
    return n * factorial(n - 1);

}
//Task 3
console.log(factorial(5));
let MoreNum = (n1,n2,n3) =>
{
    let strinh = n1 + "" + n2 + "" + n3;
    
    let num = parseInt(strinh)
    console.log(num)

}
MoreNum(1,2,3)

//Task 4
let Square = (width,height = 0) =>
{
    if(height != 0)
        return height * width
    else
        return width * width
}

console.log(Square(5,4));


//Task 5
let Doskonale = (n1) =>
{
    let sum = 0;
    for (let i = 0; i < n1; i++) {
       if(n1 % i == 0)
        sum += i
        
    }
    if(sum == n1)
        return true
    else
        return false
}
// Doskonale(496)


//Task 6
let ShowDosconale = (n1,n2) =>
{
    
    for (let i = n1; i < n2; i++) {
       if(Doskonale(i) == true)
            console.log(i)

        
    }
    
}
ShowDosconale(1,500)

//Task 7
let Showtime = (hours,min = 0,sec = 0) =>
{
    
    if(min == 0 && sec == 0)
    {
        console.log(`${hours}:00:00`)
    }
    else if(min == 0 && sec != 0)
    {
        console.log(`${hours}:00:${sec}`)
    }
    else if(min != 0 && sec == 0)
    {
        console.log(`${hours}:${min}:00`)
    }
    else
        console.log(`${hours}:${min}:${sec}`)
    
}
Showtime(13,10,10)

//Task 8
let retSec = (hours,min,sec) =>
{
    
    return sec + min * 60 + hours * 60 * 60
    
}
console.log(retSec(15,30,14))


//Task 9
let retTime = (sec) =>
{
    let hour = parseInt(sec / 60 / 60)
   
    let min = parseInt(sec / 60 - hour * 60)
    let sec1 = parseInt(sec - hour * 60 * 60 - min * 60)
    console.log(`${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${sec1 < 10 ? "0" + sec1 : sec1}`)

    
    
}
retTime(retSec(9,30,9))


//Task 10
let timecheck = (hours1,min1,sec1,hours2,min2,sec2) =>
{
    let time1 = retSec(hours1,min1,sec1)
    let time2 = retSec(hours2,min2,sec2)

    if(time1 > time2)
    {
        let temp = time1;
        time1 = time2
        time2 = temp
    }
    let timeless = time2 - time1;
        
    retTime(timeless);
    
    
}
timecheck(9,21,54,3,45,59)