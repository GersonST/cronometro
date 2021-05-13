//Definindo variaveis

let seconds = 0;
let minutes = 0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Função para incrementar o relógio

function stopwatch() {
    seconds++;

if(seconds/60 === 1){
    seconds = 0;
    minutes++;

    if(minutes/60 === 1){
        minutes = 0;
        hours++;
    }
}
      
// Aparecer valores para usuário

if(seconds < 10) {
    displaySeconds = "0" + seconds.toString();
} else {
    displaySeconds = seconds;
}
if(minutes < 10) {
    displayMinutes = "0" + minutes.toString();
} else {
    displayMinutes = minutes;
}
if(hours < 10) {
    displayHours = "0" + hours.toString();
} else {
    displayHours = hours;
}
document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes+ ":" + displaySeconds;
}



setInterval(stopwatch,1000);

