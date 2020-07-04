//JavaScript objects are containers for named values, called properties and methods.
//An object method is an object property containing a function definition.
//
// To create new objects:
//    - Define and create a single object, using an object literal.
//Using an object literal, you both define and create an object in one statement.
//An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
//    - Define and create a single object, with the keyword new.
let person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
//    - Define an object constructor, and then create objects of the constructed type.
//    - In ECMAScript 5, an object can also be created with the function Object.create().

//Objects are mutable: They are addressed by reference, not by value:
let x = person;
x.age = 10;           // This will change both x.age and person.age
console.log(person);

// Object property has attributes: value, enumerable, configurable, and writable.
//ECMAScript 5 has methods for both getting and setting all property attributes
//JavaScript objects inherit the properties of their prototype.
//
// The delete keyword does not delete inherited properties, but if you delete a
// prototype property, it will affect all objects inherited from the prototype.

//Objects getter and setter:
let person3 = {
    name: "Sam",
    surname: "Dou",
    age: 23,
    language: "no",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value;
    }
};
person3.lang = "English";
//document.getElementById("demo").innerHTML = person.lang;
console.log(person3.lang);
