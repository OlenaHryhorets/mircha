//Fibonacci numbers-are constant sequence of numbers that represents summary of previous numbers
const fib = n => {
    let prev = 0, next = 1;
    for(let i = 0; i < n; i++){
        let temp = next;
        next = prev + next;
        prev = temp;
    }
    return prev;
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(4));
console.log(fib(100));
