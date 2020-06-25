// hoisting means lift up
// JavaScript only hoist declarations, not initializations,so it only stores function
// and variable declarations in the memory, not their assignments (value).
// For example:   console.log(a); // outputs 'undefined'
//                var a = 3;
// Because it's lexicalEnvironment = { a: undefined } till it reaches the line
// where the actual assignment is done in the code (var a = 3) and then
// lexicalEnvironment = { a: 3 }
// when you using var always define your variables it at the top
var y = 2;
var x = function () {
    //var y = 1;//1
    console.log(y);
    var y = 1; //undefined (I defined the variable but I haven't
// assign any value to it, so according to hoisting it will be initialize with undefined)
    //y = 1; //2
};
x();

// Object.defineProperty(window, "PI", { //TODO why when Window it gives 2 ?
//     value: 3.14,
//     writable: false
// })
// PI = 2;
// console.log('PI');
//const PI2 = 3.14;
//PI2 = 2;
//console.log(PI2);//Uncaught TypeError: Assignment to constant variable.


// A lexical environment is a data structure that holds identifier-variable mapping
// lexical environment is a place where variables and functions live during the program execution.
// https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda
// Only function declarations are hoisted in JavaScript, function expressions are not hoisted:

helloWorld();  // prints 'Hello World!' to the console
function helloWorld(){
    console.log('Hello World!');
}
//helloWorld2();  // TypeError: helloWorld2 is not a function
var helloWorld2 = function(){
    console.log('Hello World!');
}
helloWorld2(); //this code is work

//console.log(a);
//let a = 3;  ReferenceError: a is not defined
//All declarations (function, var, let, const and class) are hoisted in JavaScript,
//but let and const declarations remain uninitialized, while var is initialized with undefined

function foo () {
    console.log(a);
}
let a = 20;
foo();  // This is perfectly valid
//But this will generate a reference error.
//      function foob() {
//      console.log(b); // ReferenceError: b is not defined
//      }
//      foob(); // This is not valid
//      let b = 20;
