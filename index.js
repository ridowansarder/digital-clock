 
function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM"; 
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);
  hours = hours > 12 ? hours % 12 : hours;
  document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
}
updateClock();
  
setInterval(updateClock, 1000);