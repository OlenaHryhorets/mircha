//new methods of Array.prototype: flat(), flatMap(), reduceRight(), copyWithin
const matrix = [[1,2,3],[4,5,7]]; //need to make them one dimensional:
const flatArray = matrix.flat(1);
console.log(flatArray);   //[ 1, 2, 3, 4, 5, 7 ]
//if very deep dimensional:
const matrixDeep = [[1,2], [1,[[[[[1]]]]]]];
console.log(matrixDeep.flat(Infinity));   //[ 1, 2, 1, 1 ]
//if you need to add all of elements:
let total = matrixDeep.flat(Infinity).reduce((a, v) => a + v, 0);
console.log(total);   //5


const num = [1, 2, 3, 4];
const str = ['one', 'two', 'three', 'four'];
const mapped = num.map((val, index) => [val, str[index]]);
console.log(mapped);  //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ], [ 4, 'four' ] ]
const mappedFlat = num.flatMap((val, index) => [val, str[index]]);
console.log(mappedFlat);  //[ 1, 'one', 2, 'two', 3, 'three', 4, 'four' ]


const strs = ['t', 's', 'e', 'b'];
let best = strs.reduce((a, v) => a + v);
console.log(best);  //tseb
let best2 = strs.reduceRight((a, v) => a + v);
console.log(best2);  //best
//reduceRight() for numbers is the same as reduce()
