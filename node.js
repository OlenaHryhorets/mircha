process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
    input += text;
});

process.stdin.on('end', function () {
    //do your processing here.
    var number = parseInt(input);
    input = "Hello";
    for(var i=0; i<number; i++){
        console.log(input);
    }
});
























// Do not worry about code in this section, it is internal
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";
var testcaseIndex;
process.stdin.on('data', function (text) {
    input += text;
});
// Do not change code above! It cause test failed

// You must work just only in following section:
function SuperArray(){
    this.innerArray = [];
    this.put = function(a){

        //You should fill in your solution here
    };
    this.pop = function(){
        //You should fill in your solution here
        //Try not to use return this.innerArray.shift()
    };
    this.putArray = function(arr){
        // You should fill in your solution here
    };
    this.putSuperArray = function(sa){
        // You should fill in your solution here
    };
    this.fill = function(n, k){
        // You should fill in your solution here
    };
    this.print = function(){
        return this.innerArray.join(',');
    };
}

var superArray = new SuperArray();
var superArray2 = new SuperArray();

// Do not worry about code in this section, it is internal
// Do not change code below! It causes test failed
process.stdin.on('end', function () {
    var inputParsed = input.split(' ');
    var testcaseIndex = parseInt(inputParsed.shift());
    var unsorted1 = inputParsed.shift().split(',').map((el) => parseInt(el));
    var unsorted2 = inputParsed.shift().split(',').map((el) => parseInt(el));
    superArray.putArray(unsorted1);
    superArray2.putArray(unsorted2);

    switch(testcaseIndex){
        case 1:
            break;
        case 2:
            superArray.put(15);
            var pop = superArray.pop();
            superArray2.put(pop);
            break;
        case 3:
            var n = superArray.pop();
            var k = superArray2.pop();
            superArray2.fill(n, k);
            break;
        case 4:
            superArray.putSuperArray(superArray2);
            break;
        case 5:
            superArray.put(15);
            break;
        case 6:
            superArray.pop();
            break;
        case 7:
            superArray.fill(30, 2);
            break;
    }
    console.log(superArray.print());
    console.log(superArray2.print());
});
