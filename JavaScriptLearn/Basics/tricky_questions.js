//TRICKY QUESTIONS
// let q = ?
let q = Number.MIN_VALUE
console.log(q); // 5e-324 it is almost zero
console.log(q * q);  //0
console.log(q + 1);  //1
console.log(q - 1);  //-1
console.log(q / q);  //1

let arrResult = [1, 2, 3] + [4, 5, 6];
console.log(arrResult);// 1,2,34,5,6 so it concatenate them, if I want an array:
let arrResult2 = [...[1, 2, 3], ...[4, 5, 6]];
console.log(arrResult2);
