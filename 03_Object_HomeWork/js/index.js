function Car(manufactured, model, year, avspeed) {
    this.manufactured = manufactured;
    this.model = model;
    this.year = year;
    this.avspeed = avspeed;

}
const myCar = new Car("Toyota", "Camry", 2020, 100);
let Task1 = (rec = new Car()) => {
    console.log(`Manufactured  : ${rec.manufactured}`)
    console.log(`Model         : ${rec.model}`)
    console.log(`Year          : ${rec.year}`)
    console.log(`Averege speed : ${rec.avspeed}`)


}
Task1(myCar)

let Task2 = (rec = new Car(), kilometres) => {
    let hours = Math.ceil(kilometres / rec.avspeed)
    let hourswac = Math.floor(hours / 4)
    let allhours = hourswac + hours
    return allhours
}
console.log(Task2(myCar, 520));




function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}
let fr1 = new Fraction(2, 3);
let fr2 = new Fraction(5, 6);

let FTask1 = (fr1 = new Fraction(), fr2 = new Fraction()) => {
    let denominator1 = fr1.denominator * fr2.denominator;
    let numerator1 = fr1.numerator * fr2.denominator + fr2.numerator * fr1.denominator
    return new Fraction(numerator1, denominator1)

}

let fr3 = FTask1(fr1, fr2);
console.log(`${fr3.numerator}/${fr3.denominator}`)

let FTask2 = (fr1 = new Fraction(), fr2 = new Fraction()) => {
    let denominator1 = fr1.denominator * fr2.denominator;
    let numerator1 = fr1.numerator * fr2.denominator - fr2.numerator * fr1.denominator
    return new Fraction(numerator1, denominator1)

}

let fr4 = FTask2(fr1, fr2);
console.log(`${fr4.numerator}/${fr4.denominator}`)

let FTask3 = (fr1 = new Fraction(), fr2 = new Fraction()) => {
    let numerator = fr1.numerator * fr2.numerator;
    let denominator = fr1.denominator * fr2.denominator;
    return new Fraction(numerator, denominator);
}
let fr5 = FTask3(fr1, fr2);
console.log(`${fr5.numerator}/${fr5.denominator}`)
let FTask4 = (fr1 = new Fraction(), fr2 = new Fraction()) => {
    if (fr2.numerator === 0) {
        console.log("Num is null");
        return -1;
    }
    let numerator = fr1.numerator * fr2.denominator;
    let denominator = fr1.denominator * fr2.numerator;
    return new Fraction(numerator, denominator);
}
let fr6 = FTask4(fr1, fr2);
console.log(`${fr6.numerator}/${fr6.denominator}`)
let FTask5 = (fr1 = new Fraction()) => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(Math.abs(fr1.numerator), Math.abs(fr1.denominator));
    fr1.numerator /= divisor;
    fr1.denominator /= divisor;

    return fr1
}
let fr7 = FTask5(fr3);
console.log(`${fr7.numerator}/${fr7.denominator}`)

function MYTime(hours, min, sec) {
    this.hours = hours;
    this.min = min;
    this.sec = sec;
}
let TTask1 = (rec = new MYTime()) => {
    console.log(`${rec.hours < 10 ? "0" + rec.hours : rec.hours}:${rec.min < 10 ? "0" + rec.min : rec.min}:${rec.sec < 10 ? "0" + rec.sec : rec.sec}`)
}
const myTime = new MYTime(20, 34, 48);
TTask1(myTime)
let TTask2 = (rec = new MYTime(), hours) => {
    rec.hours += hours;
}
TTask2(myTime, 3)
TTask1(myTime)
let TTask3 = (rec = new MYTime(), min) => {
    let minutes = rec.min + min
    let hours2 = Math.floor(minutes / 60)
    let minutes1 = minutes - (hours2 * 60)
    rec.min = minutes1;
    rec.hours += hours2
}
TTask3(myTime, 10)
TTask1(myTime)

let TTask4 = (rec = new MYTime(), sec) => {

    let secund = rec.sec + sec;
    let minutes = Math.floor(secund / 60);
    rec.sec = secund % 60;

    if (minutes !== 0) {
        let min2 = rec.min + minutes;
        let hours2 = Math.floor(min2 / 60);
        let minutes1 = min2 % 60;

        rec.hours += hours2;
        rec.min = minutes1;
    }

}
TTask4(myTime, 2000)
TTask1(myTime)