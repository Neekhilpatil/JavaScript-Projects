document.addEventListener('DOMContentLoaded', function(){
const daysEl = document.getElementById('day');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds');

const newYears = "01 Jan 2024";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const day = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = day;
    hoursEl.innerHTML =formatTime(hours) ;
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}`:time;
}

countdown();

setInterval(countdown,1000) })