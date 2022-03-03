var day = new Date();
var hrs = day.getHours();
if(hrs<10){
    hrs=`0${hrs}`;
}
var min = day.getMinutes();
if(min<10){
    min=`0${min}`;
}
var time = hrs + " : " + min;
document.getElementById('hours').innerHTML = time;
document.getElementById('minutes').innerHTML = time;
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var daysofweek = days[new Date().getDay()];
document.getElementById('day').innerHTML = daysofweek;