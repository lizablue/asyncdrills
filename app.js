function consoleMsg(string) {
    console.log(string);
};

consoleMsg('hi');

setTimeout(function() {consoleMsg('hey');}, 2000);