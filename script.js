let currentDay = document.querySelector("[data-testid=currentDayOfTheWeek]");
let currentTime = document.querySelector("[data-testid=currentUTCTime]");

let currentDatetime = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = daysOfWeek[currentDatetime.getDay()];

let hours = currentDatetime.getUTCHours();
const ampm = hours >= 12 ? 'PM' : 'AM';
// hours = hours % 12 || 12;
const minutes = currentDatetime.getUTCMinutes();
const seconds = currentDatetime.getUTCSeconds();

const hrs = hours < 10 ? `0${hours}` : `${hours}`
const sec = seconds < 10 ? `0${seconds}` : `${seconds}`
const min = minutes < 10 ? `0${minutes}` : `${minutes}`

currentDay.textContent = `${dayOfWeek}`;
currentTime.textContent =`${hrs}:${min}:${sec} ${ampm}`;