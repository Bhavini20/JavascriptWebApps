const daysEl= document.getElementById('days');
const horsEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secsEl= document.getElementById('secs');

const newYears = '1 January 2022';

function countdown(){
    const nYDate= new Date(newYears);
    const currentDate = new Date();
   
    const d = new Date(nYDate - currentDate);
    const sec = (nYDate - currentDate) / 1000;

    const days = Math.floor(sec / (3600 *24));
    const hours = Math.floor(sec / 3600) % 24;
    const minutes = Math.floor(sec / 60)% 60;
    const seconds = Math.floor(sec % 60);
   // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML= ft(days);
    horsEl.innerHTML= ft(hours);
    minsEl.innerHTML= ft(minutes);
    secsEl.innerHTML= ft(seconds);
    
}
function ft(time){
    return time < 10 ? `0${time}` : time;
}
//InitialCall
countdown();

setInterval(countdown, 1000);

