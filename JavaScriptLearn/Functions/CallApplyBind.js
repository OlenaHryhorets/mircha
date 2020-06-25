let addC = function (c) {
    console.log(this.a + this.b + c);
}
 let obj = {
    a: 1,
    b: 2
 };
addC.call(obj, 3);

console.dir([]);
