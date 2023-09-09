let currentDay = document.getElementById("currentDay");
let currentTime = document.getElementById("currentTime");

let currentDatetime = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[currentDatetime.getDay()];

let hours = currentDatetime.getHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
const minutes = currentDatetime.getMinutes();
const seconds = currentDatetime.getSeconds();

const sec = seconds < 10 ? `0${seconds}` : `${seconds}`
const min = minutes < 10 ? `0${minutes}` : `${minutes}`

// const datetimeElement = document.getElementById("datetime");
currentDay.textContent = `${dayOfWeek}`;
currentTime.textContent =`${hours}:${minutes}:${sec} ${ampm}`;