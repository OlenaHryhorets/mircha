let w = myCalculator(4, 3);
console.log(w);

function myCalculator(a, b) {
    return a*b;
}
function toCelsium(Farengeiht) {
    return (5/9)*(Farengeiht-32);
}
function toCelsium77() {
    document.getElementById("demo").innerHTML="The temperature is " + toCelsium(77) + " farengeiht";
}

let car = {
    name: "Mersedes",
    year: 2010,
    color: "white",
    carInfo: function () {
        return this.color + " " + this.name + " " + this.year;
    }
};
x = car.color;
let y = car["color"];



const person = {
    name: 'peter',
    birthYear: 1994,
    calcAge: function() {
        console.log(2018 - this.birthYear);
    }
}
person.calcAge();
// 'this' refers to 'person', because 'calcAge' was called with
// 'person' object referenceconst calculateAge = person.calcAge;
calculateAge();
// 'this' refers to the global window object, because no object reference was given

