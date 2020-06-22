//
//      for (let i = 0; i < arr.length; ++i) //like for/in loop has access to indexes not values
//      for (let i in arr)  //not ignored non-numeric keys, it's bad practice
//      arr.forEach((v, i) => { /* ... */ }) //you have value but can also get an index
//      for (const v of arr) //index isn't available

// The task is "Remove duplicates from array"
let a = [1, 2, 5, 1, 3, 2, 8, 10, 15, 28, 30];
a.forEach((v, index) => console.log(index));
let b = [];
let c = [];
let len = a.length;

for (let i = 0; i<len; i++) {
    if(b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}
console.log(b);

// another way with sort and remove:
a.sort(); //[1, 1, 2, 2, 3, 5, 8]
let _temp;
for (let i = 0; i < len; i++) {
    if(a[i] !== _temp) {
        c.push(a[i]);
        _temp = a[i];
    }
}
console.log(c);
// by using object (in java we could use HashTable)
const obj = {};
for(let i of a) {
    obj[i] = true;
}
console.log(obj);
let d = Object.keys(obj);
console.log(d);

//do it by the only one line of code:
//JavaScript ES2016 introduced new data type Set, that can stored only unique values
let bSet = new Set(a);
console.log(bSet);
//but it isn't an array, so i can
console.log([... new Set(a)]); //this is the best solution


const arr = ['a', 'b', 'c'];
arr.test = 'bad';
// Prints "a, b, c"
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
}
// Prints "a, b, c"
arr.forEach((el, i) => console.log(i, el));
// Prints "a, b, c"
for (const el of arr) {
    console.log(el);
}
// Prints "a, b, c, bad" not ignored non-numeric keys, it's bad practice
for (let i in arr) {
    console.log(arr[i]);
}

//TRICKY QUESTIONS
// let q = ?
let q = Number.MIN_VALUE
console.log(q); // 5e-324 it is almost zero
console.log(q * q);  //0
console.log(q + 1);  //1
console.log(q - 1);  //-1
console.log(q / q);  //1

let arrResult = [1, 2, 3] + [4, 5, 6];
console.log(arrResult);// 1,2,34,5,6 so it concatinate them, if I want an array:
let arrResult2 = [...[1, 2, 3], ...[4, 5, 6]];
console.log(arrResult2);
