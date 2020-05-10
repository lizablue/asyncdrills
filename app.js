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

// Callbacks and Recursion
const done = () => {
    console.log('Job\'s done!');
};

function countdown(num, callback) {
    setTimeout(() => {
        if (num > 0) {
            console.log(num);
            countdown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);

};


countdown(3, done);