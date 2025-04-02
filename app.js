const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const minutes = document.querySelectorAll("minutes");
const seconds = document.querySelectorAll("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date("January 1 ${currentYear + 1} 00:00:00");

//
function updateCountdowntime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000);
    console.log(diff);
}
updateCountdowntime();