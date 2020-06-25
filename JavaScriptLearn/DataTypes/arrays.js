//arrays are special type of objects
var xa = ["a", "b", "c"];
//console.log(xa);
var ya = [];
ya.push(1);
ya.push("a");
ya.push(null);
ya.pop();//remove last element
//console.log(y);
console.log(ya[0]);//give me the first element from array by index 0

//
//console.dir(Array); in console you see Array constructor with it's methods
//console.dir([]); in console you see Array's prototype with bunch of methods
const x = [1, 2, 3];
const y = x.slice();
console.log(x);
console.log(y);
const z = Array.from(x);//Array.from() is a constructor method and it can create array from something
console.log(z);
let str = 'abcdefg';
console.log([...str]);
const aFromString = Array.from(str);
console.log(aFromString);

//const fromScratch = (new Array(5)).fill(0); //creates an empty array
const fromScratch = (new Array(5)).fill(0).map((v, i) => i);//[ 0, 1, 2, 3, 4 ]
//const fromScratch = Array.from({length:5}, (v, i) => v);//creates an array with 5 undefined elements
                  //Array.from({length:5}, (v, i) => '' )  array with 5 elements witch are empty strings
                  //Array.from({length:5}, (v, i) => i )  array with 5 elements witch are indexes 0,1,2,3,4
                  //Array.from({length:5}, (v, i) => i*i ) squared indexes numbers 0,1,4,9,16
console.log(fromScratch);

const ary =[1, 1, 2]; //how to remove duplicates
const uniq = Array.from(new Set(ary));
const uniq2 = ([...new Set(ary)]);
console.log(uniq2);


const func = function () {
    console.log(arguments);//represent massive of arguments but you couldn't join them
    console.log(Array.from(arguments).join('')); //oneword
}
func('o', 'n', 'e', 'w', 'o', 'r', 'd');

//array with negative index
const aryNeg = [1, 2, 3];
aryNeg[-1] = 0;
aryNeg['hikey'] = 'hivalue';
aryNeg['a'] = 'A';
console.log(aryNeg);
console.log("The length of array is still: " + aryNeg.length);//3 Why?
const arrr = [];
arrr['a'] = "aval";
arrr['b'] = "bval";
for(let key in arrr) {
    console.log(`${key}: ${arrr[key]}`);//looks like object(those are arrays in fact), but objects don't have length!!!
}
//performance insert, access arrays VS objects
console.time("a");
const a = [];
for(let i = 0; i < 10000000; i++) {
    a[i] = i;

}
console.timeEnd("a");
console.time("o");
const o = {};
for(let i = 0; i < 10000000; i++) {
    o[i] = i;
}
console.timeEnd("o");
console.time('adel');
delete a[5000];
console.timeEnd('adel');
console.time('odel');
delete o[5000];
console.timeEnd('odel');




