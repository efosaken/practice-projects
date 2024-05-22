const hour = document.getElementById('hour');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm')

function updateClock() {
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let ampm = "AM";
    
    if(h > 12 && m == 1 && s == 0) {
         ampm = "PM"
    } else if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }
 
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML= s;
    ampmElement.innerHTML = ampm;
  
  
    
setTimeout(updateClock, 1000)
}

updateClock()