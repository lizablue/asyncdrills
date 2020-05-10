// Timing Out Section
// function consoleMsg(string) {
//     console.log(string);
// };

// consoleMsg('hi');

// setTimeout(function() {consoleMsg('hey');}, 2000);

// function getWords() {
//     console.log('hi');
//     setTimeout(function() {console.log('hey');}, 3000);
//     setTimeout(function() {console.log('harro');}, 5000);
//     setTimeout(function() {console.log('hiiii');}, 6000);
// };
// getWords();

// // Callbacks and Recursion
// const done = () => {
//     console.log('Job\'s done!');
// };

// function countdown(num, callback) {
//     setTimeout(() => {
//         if (num > 0) {
//             console.log(num);
//             countdown(num - 1, callback);
//         } else {
//             callback();
//         }
//     }, 1000);

// };


// countdown(3, done);

// Promises promises
let lunchTime = false;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if(lunchTime === true) {
            let meal = {
                lunch: 'Bibimbap',
                drink: 'Spindrift',
            }
            resolve(meal);
        } else {
            let err = new Error('we\'re out of food.');
            reject(err);
        }
    });
};

orderMeSomeFood()
.then((meal) => {
    console.log(meal);
}).catch((err) => {
    console.log(err);
});