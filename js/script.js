var countDownTime = new Date("March 29, 2024 11:30:00").getTime();
var countDownFunction = setInterval(function() {
    var now = new Date().getTime();
    var main = countDownTime - now;


if (main >= 0) {
    var days = Math.floor(main / (1000 * 60 * 60 * 24));
    var hours = Math.floor((main % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((main % (1000 * 60 * 60)) / (1000 * 60 ));
    var seconds = Math.floor((main % (1000 * 60 )) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
else{
    clearInterval(countDownFunction);
    document.getElementById("time").innerHTML = "Giveaway has ended";
}

}, 1000);