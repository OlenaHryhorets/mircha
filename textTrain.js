//text training:
// merge two arrays with sorting

const ab = [ 1, 2, 3, 4, 7, 12 ];
const bc = [ 2, 5, 7, 9, 12 ];
const cd = ab.concat(bc)
console.log(cd);

//only values of object in array
let o = {
    a:1,
    b:2
};
const arr = Object.entries(o);
const arr2 =[];
for( let i in o){
    arr2.push(i);
}
const arr3 = Object.values(o);
console.log(arr);
console.log(arr2);
console.log(arr3);

//reverse string

let x = "himas";
let y = "samih";

// let c = x.split("").reverse().join("");
// console.log(y===c);
const reverseString = (str) => str.split('').reverse().join('');
console.log((reverseString(x))===y);

//how to console.log object methods A and B at the same time?
const obj = {
    a:33,
    b:23,
    getA(){
        console.log(this.a);
        return this;
    },
    getB(){
        console.log(this.b);
    }
}
obj.getA().getB();

//create a method to print an array
Array.prototype.print = function() {
    console.log(this.toString());
}
const arrToPrint = [1, 2, 3].print();

//inheriting and call parent function
//With call(), an object can use a method belonging to another object
const a = function(x) {
    this.x = x;
};
a.prototype={
    getX(){
        return this.x;
    }
}
const b = function(x,y) {
    this.y = y;
    //this.x = new a(x).x;
    a.call(this, x);

    // getY(){
    //     return this.y;
    // }
};
 const newB = new b('777', '888');
console.log(newB.getX);
//console.log(newB.getY);


//need to clone object with deep cloning
//Object.assign({},objectT); will copy only one level
const objectT = {
    a: {
        b: {
            c: 1
        }
    }
};
const clone = JSON.parse(JSON.stringify(objectT));
clone.a.b.c = 2;
console.log(objectT.a.b.c);

// set to the object new properties
const deFobj = {
    name: "Fobj"
}
Object.defineProperty(deFobj, 'site', {value: 'proghub', configurable: true});
console.log(deFobj);
console.log(deFobj.site);
delete deFobj.site;
delete deFobj.name;
console.log(deFobj.site);
console.log(deFobj);

console.log("___________________________________");
console.log([]+3+null);
console.log(!{});  //false
console.log(!{a:1});  //false
let someValue = x;
console.log(Boolean(someValue)); //to check someValue on false

//date formatter from M/D/YYYY to YYYYMMDD
function dateToYMD(date) {
    let d = date.getDay();
    let m = date.getMonth() + 1; //Month from 0 to 11
    let y = date.getFullYear();
    return '' + y +  (m<=9 ? '0' + m : m) + (d <= 9 ? '0' + d : d);
}

console.log(dateToYMD(new Date("12/31/2014")));

//
function ensure(value) {
    let args = Array.from(arguments);
    if (args.length == 0 || args[0] == undefined) {
        throw 'Empty params';
    }
    return value;
}

try {
    console.log(ensure(undefined));
} catch(err) {
    console.log(err);
}
console.log("___________________________________");
var xs = 3;
var foo = {
    xs:2,
    baz: {
        xs:1,
        bar: function(){
            return this.xs;
        }
    }
}
var go = foo.baz.bar;
console.log(go()); //in html is 3
console.log(foo.baz.bar()); //1


console.log("___________________________________");
function foof(a, b){
    arguments[1]=2;
    console.log(b);
}
foof(1 );    //undefined
foof(1, undefined );   //2


var arrfoo = [];
arrfoo[0]='a';
arrfoo[1]='b';
arrfoo.fa='c';
console.log(arrfoo);
console.log(typeof arrfoo.fa);


console.log(parseInt(1/0, 19));   // 18
console.log(!!~~1);   // true
console.log(null==undefined);   // true but with === false
//console.log((?,,,,?)==Array(4));   // false
console.log([[[[[22]]]]]==22);   // true but with === false


console.log("___________________________________");
var num = 0;
var obje = new String("0");
var str = "0";
var bb = false;

console.log(num == num); // true
console.log(obje == obje); // true
console.log(str == str); // true

console.log(num == obje); // true
console.log(num == str); // true
console.log(obje == str); // true
console.log(null == undefined); // true

console.log(obje == null); // false
console.log(obje == undefined); // false





