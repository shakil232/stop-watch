
var minutes = 00;
var seconds = 00;
var mileSecond = 00;
var addMileSecond = document.getElementById('mileSecond');
var addSeconds = document.getElementById('seconds');
var addMinutes = document.getElementById('minutes');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
var interval ;
function startTimer(){
    mileSecond++;
    if (mileSecond <9) {
        addMileSecond.innerHTML = '0'+ mileSecond;
    }
    if (mileSecond >9) {
        addMileSecond.innerHTML = mileSecond;
    }
    if (mileSecond >99) {
        seconds ++;
        addSeconds .innerHTML ='0' + seconds ;
        mileSecond =  0;
        addMileSecond.innerHTML ='0'+ 0;
    }
    if (seconds  >9) {
        addSeconds.innerHTML = seconds ;
    }
    if (seconds >59) {
        minutes ++;
        addMinutes .innerHTML ='0' + minutes ;
        seconds =  0;
        addSeconds.innerHTML ='0'+ 0;
    }
    if (minutes >9) {
        addMinutes.innerHTML = minutes ;
    }
}
startButton.onclick = function (){
    interval = setInterval(startTimer);
};
stopButton.onclick = function (){
    clearInterval(interval);
};
resetButton.onclick = function (){
    clearInterval(interval);
    mileSecond = '00';
    seconds = '00';
    minutes = '00';

    addMileSecond.innerHTML = mileSecond;
    addSeconds.innerHTML = seconds;
    addMinutes.innerHTML = minutes ;
};


// var seconds = 00;
// var tens = 00;
// var addTens = document.getElementById('tens');
// var addSeconds = document.getElementById('seconds');

// var startButton = document.getElementById('start');
// var stopButton = document.getElementById('stop');
// var resetButton = document.getElementById('reset');
// var interval ;
// function startTimer(){
//     tens++;
//     if (tens <9) {
//         addTens.innerHTML = '0'+ tens;
//     }
//     if (tens >9) {
//         addTens.innerHTML = tens;
//     }
//     if (tens >99) {
//         seconds ++;
//         addSeconds .innerHTML ='0' + seconds ;
//         tens =  0;
//         addTens.innerHTML ='0'+ 0;
//     }
//     if (seconds  >9) {
//         addSeconds.innerHTML = seconds ;
//     }
// }
// startButton.onclick = function (){
//     interval = setInterval(startTimer);
// };
// stopButton.onclick = function (){
//     clearInterval(interval);
// };
// resetButton.onclick = function (){
//     clearInterval(interval);
//     tens = '00';
//     seconds = '00';
//     addTens.innerHTML = tens;
//     addSeconds.innerHTML = seconds;
// };