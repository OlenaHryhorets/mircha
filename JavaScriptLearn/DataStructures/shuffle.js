//https://bost.ocks.org/mike/shuffle/
//Here’s what the implementation looks like in JavaScript, not that you should use it:
//
//     function shuffle(array) {
//         var copy = [], n = array.length, i;
//
//         // While there remain elements to shuffle…
//         while (n) {
//
//             // Pick a remaining element…
//             i = Math.floor(Math.random() * array.length);
//
//             // If not already shuffled, move it to the new array.
//             if (i in array) {
//                 copy.push(array[i]);
//                 delete array[i];
//                 n--;
//             }
//         }
//
//         return copy;
//     }
//shuffle is to randomize the order.For avoid duplicate selection and picking only remaining
// elements: pick a random number in the range of 0 to But when you remove each element from the original array
// (array.splice), you have to shift all the subsequent elements down to compact the array.
function shuffle(array) {
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
const arr =[];
for (let i = 0; i <= 1000000; i++ ) {
    arr.push(i);
}
console.log(arr);
const arrShuffled = shuffle(arr);
console.log(arrShuffled);
