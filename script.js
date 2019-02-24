
//Get today's date to show up
let currentDate = new Date(),
day = currentDate.getDate(),
month = currentDate.getMonth(),
year = currentDate.getFullYear();
document.write(day + "/" + month + "/" + year)


//Getting current time to show up

let currentTime = new Date(),
hours = currentTime.getHours(),
minutes = currentTime.getMinutes();

if (minutes < 10) {
minutes = "0" + minutes;
}

let suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}

document.write(hours + ":" + minutes + " " + suffix)