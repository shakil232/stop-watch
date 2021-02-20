


var seconds = 00;
var tens = 00;
var addTens = document.getElementById('tens');
var addSeconds = document.getElementById('seconds');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');
var interval ;
function startTimer(){
    tens++;
    if (tens <9) {
        addTens.innerHTML = '0'+ tens;
    }
    if (tens >9) {
        addTens.innerHTML = tens;
    }
    if (tens >99) {
        seconds ++;
        addSeconds .innerHTML ='0' + seconds ;
        tens =  0;
        addTens.innerHTML ='0'+ 0;
    }
    if (seconds  >9) {
        addSeconds.innerHTML = seconds ;
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
    tens = '00';
    seconds = '00';
    addTens.innerHTML = tens;
    addSeconds.innerHTML = seconds;
};