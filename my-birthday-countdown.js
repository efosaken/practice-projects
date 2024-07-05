const days  = document.getElementById("day");
const hours  = document.getElementById("hour");
 const minutes = document.getElementById("minute");
 const seconds = document.getElementById("second")


 const birthday  = new Date("June 14, 2025 00:00:00").getTime();
 console.log(birthday)

updateBirthdayCountdown();

function updateBirthdayCountdown() {
    const timeNow = new Date().getTime();
    
    const difference = birthday - timeNow;
    

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(difference / day)
    
    const h = Math.floor((difference % day) / hour);

    const m = Math.floor((difference % hour) / minute)
    const s = Math.floor((difference % minute) / second)
    

    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s
    
    setTimeout(updateBirthdayCountdown, 1000)
}