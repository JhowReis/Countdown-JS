const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const countDate= new Date("Jan 1, 2021 00:00:00").getTime();

function countdown(){
    const now = new Date().getTime();
    const gap = (countDate - now) ;
    const totalDay = 365


    const second = 1000
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day)) + totalDay;
    const h = Math.floor((gap % day) /  hour) + 24;
    const m = Math.floor((gap % hour) / (minute)) + 60;
    const s = Math.floor(((gap % minute) / second)) + 60;

    daysEl.innerHTML =   d;
    hoursEl.innerHTML =  h;
    minutesEl.innerHTML = m;
    secondsEl.innerHTML = s;
    

}
    

countdown();

setInterval(countdown, 1000)