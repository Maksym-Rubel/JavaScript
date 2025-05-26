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




