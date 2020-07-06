// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.
// Arrow functions do not have their own 'this'. With arrow functions the this keyword always
// represents the object that defined the arrow function
// They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// ES5
    var y = function(x, y) {
    return x * y;
}
// ES6
const x = (x, y) => x * y;

'use strict'
let getA = a => a;
console.log(getA(2));

let squareB = (b) => { return b*b };
console.log(squareB(2));

var f = function () {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    } , 1)
    };
    var ff = new f();

