console.log();

let Hrs = document.getElementById("Hrs");
let Min = document.getElementById("Min");
let Sec = document.getElementById("Sec");

setInterval(() => {
  let currentTime = new Date();
  
  Hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  Min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  Sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

}, 1000);

console.log("End of Code");
console.log();