var clock = new Vue({
    el: "#clock",
    data: {
        time: "",
        date: ""
    }
});

var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var timerID = setInterval(updateTime, 1000);
updateTime();

// Generates datetime clock
function updateTime() {
    var cd = new Date();
    clock.time =
        zeroPadding(convertToTwelve(cd.getHours()), 2) +
        ":" +
        zeroPadding(cd.getMinutes(), 2) +
        ":" +
        zeroPadding(cd.getSeconds(), 2) +
        getPeriod(cd.getHours());
    clock.date =
        zeroPadding(cd.getMonth()+ 1, 2) +
        "-" +
        zeroPadding(cd.getDate(), 2) +
        "-" +
        zeroPadding(cd.getFullYear(), 4) +
        " " +
        week[cd.getDay()];
}

// Adds '0' padding to single-digit numbers
function zeroPadding(num, digit) {
    var zero = "";
    for (var i = 0; i < digit; i++) {
        zero += "0";
    }
    return (zero + num).slice(-digit);
}

// Converts hours to twelve-hour time
function convertToTwelve(time) {
    if (time > 12) {
        return time % 12;
    }
    return time;
}

// Returns 'AM' or 'PM' based on given hour
function getPeriod(hour) {
    if (hour >= 12) {
        return "PM";
    } else {
        return "AM";
    }
}
