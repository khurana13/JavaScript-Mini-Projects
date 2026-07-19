var minutes = seconds = milliseconds = 0;
var myInterval;
var state = false;
var start;

function start_timer() {
    minutes = seconds = milliseconds = 0;
    myInterval = setInterval(myTimer, 10);
    state = false;
    start = document.getElementById('startbtn');
    start.disabled = true;
}

function myTimer() {
    milliseconds++;

    if(milliseconds === 100){
        milliseconds = 0;
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
            
            if(minutes === 60){
                minutes = seconds = milliseconds = 0;
            }
        }
    }
    display_time();
}

function pause_timer() {
    state = !state;
    if(state === true){
        //Stop the timer
        clearInterval(myInterval);
    }
    else{
        //Resume the timer
        myInterval = setInterval(myTimer, 10);
    }
}

function clear_timer() {
    clearInterval(myInterval);
    minutes = seconds = milliseconds = 0;
    state = false;
    start.disabled = false;
    display_time();
}   

function display_time() {
    document.getElementById('result').innerHTML = 
        `<h1>` + String(minutes).padStart(2,'0') + `:` + 
                 String(seconds).padStart(2,'0') + `:` +
                 String(milliseconds).padStart(2,'0') + 
        `</h1>`;
}