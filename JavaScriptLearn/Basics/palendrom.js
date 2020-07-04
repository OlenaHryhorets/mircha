//need to check if number is a PALINDROM
function isPalindrom(a){
       return a == a.split("").reverse().join("");
}
console.log(isPalindrom("12321"));
console.log(isPalindrom("12345"));
console.log(isPalindrom("33344333"));
