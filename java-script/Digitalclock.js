//Digital Clock

function updateclock(){
    const Dates = new Date();
    let hrs = Dates.getHours();
    const med = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 ||12;
    hrs = hrs.toString().padStart(2,0);
    const min = Dates.getMinutes().toString().padStart(2,0);
    const sec = Dates.getSeconds().toString().padStart(2,0);
    const ClockSting = (`${hrs}:${min}:${sec} ${med}`)
    document.getElementById("clockValue").textContent = ClockSting;
}

setInterval(updateclock,1000);