// create variables to colletct values of time
const hoursspan = document.getElementById("hour");
const minitesspan = document.getElementById("minite");
const secondsspan = document.getElementById("second");
const amorpmsspan = document.getElementById("amorpms");
const dayspan = document.getElementById("day");
const monthspan = document.getElementById("month");
const yearspan = document.getElementById("year");
// creat a function that retrived date and time by using DATE object
function getTime() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // assign the date and time to html elements
  hoursspan.textContent = hour;
  minitesspan.textContent = minute;
  secondsspan.textContent = second;
  dayspan.textContent = day;
  monthspan.textContent = month;
  yearspan.textContent = year;
  // for changing time periods
  if (hour < 12) {
    amorpm = "AM";
  } else {
    amorpm = "PM";
  }
  amorpmsspan.textContent = amorpm;
}
// setinterval used to calling the fuction every second's
setInterval(getTime, 1000);
// call the function
getTime();
