let obj = {num: 2};
//let addToThis = function(a){
//    return this.num + a;
//console.log(addToThis.call(obj, 3));//5

let addToThis = function(a, b, c){
      return this.num + a + b + c;
};
console.log(addToThis.call(obj, 1, 2, 3));//8

const arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));//apply means I can combine all arguments in array. That's the difference
// between call() and apply()

let bound = addToThis.bind(obj);
console.dir(bound);//to see in JSFiddle that bound is a function with [[TargetFunction]]: ƒ (a, b, c)
// witch is addToThis() and [[BoundThis]]: Object num: 2 witch is obj and there is [[BoundArgs]]: Array(0)
// witch is an array of arguments
console.log(bound(1, 2, 3)); //8

//So if you have an object and a function with a bunch of arguments you can use
// call() and pass your object and all arguments:
//          functionName.call(object, arg1, arg2, arg3);
// or apply() to pass an array of arguments:
//          functionName.call(object, [arg1, arg2, arg3]);
// or you can use bind() to first bound an object with a function and then you can execute this bound function
// by passing arguments:
//           let bound = functionName.bind(object)
//           bound(arg1, arg2, arg3);
