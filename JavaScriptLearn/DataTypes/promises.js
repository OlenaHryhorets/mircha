//States of promises:
// unresolved (pending)
// resolved (fulfilled)
// rejected
//Syntax to create:
//   const promise = new Promise((resolve, reject) => {
//       ...
//   });
//    Promise constructor takes a single argument, a callback,
//    also known as executor function which takes two callbacks, resolve and reject
//  A promise can be resolved or rejected only once!
//  const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     setTimeout(() => {
//         if(randomNumber < .6) {
//             resolve(console.log('All things went well!'));
//         } else {
//             reject(console.log('Something went wrong'));
//         }
//     }, 2000);
// });
// console.dir(promise);
// setTimeout(() => {console.dir(promise)}, 1000);

//  How to consume an already created promise:
//  we consume a promise by calling then() and catch() methods on the promise:

//      .then() syntax: promise.then(successCallback, failureCallback)
const promiseT = new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if(randomNumber < .7) {
        resolve('All things went well!');
    } else {
        reject(new Error('Something went wrong'));
    }
});
promiseT.then((data) => {
        console.log(data);  // prints 'All things went well!'
    },
    (error) => {
        console.log(error); // prints Error object
    }
);
//      .catch() syntax: promise.catch(failureCallback)
// const promiseC = new Promise((resolve, reject) => {
//     reject(new Error('Something went wrong'));
// });
// promiseC
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error); // prints Error object
//     });

//promise chain:(one after another without nest)
const promise1 = new Promise((resolve, reject) => {
    resolve('Promise1 resolved');
});
const promise2 = new Promise((resolve, reject) => {
    resolve('Promise2 resolved');
});
const promise3 = new Promise((resolve, reject) => {
    reject('Promise3 rejected');
});
promise1
    .then((data) => {
        console.log(data);  // Promise1 resolved
        return promise2;
    })
    .then((data) => {
        console.log(data);  // Promise2 resolved
        return promise3;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);  // Promise3 rejected
    });


//   Promise.all( ) method takes an array of promises as input and returns a
// new promise that fulfills when ALL of the promises inside the input array have fulfilled
// or rejects as soon as ONE of the promises in the array rejects:
const promiseP1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('PromiseP1 resolved');
    }, 2000);
});
const promiseP2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('PromiseP2 resolved');
    }, 1500);
});
Promise.all([promiseP1, promiseP2])
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error));

//   Promise.race( ) method takes an array of promises as input and returns a
// new promise that fulfills as soon as ONE of the promises in the input array
// fulfills or rejects as soon as ONE of the promises in the input array rejects
const promiseP3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('PromiseP3 resolved');
    }, 2500);
});
const promiseP4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('PromiseP4 rejected');
    }, 3000);
});
Promise.race([promiseP3, promiseP4])
    .then((data) => console.log(data))  // PromiseP3 resolved
    .catch((error) => console.log(error));
