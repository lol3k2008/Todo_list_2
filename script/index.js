// -----------------DATE------------
const clock = document.querySelector(`.time`);

const getTime = () =>{

const Time = new Date();
const hours = Time.getHours()
const minutes = Time.getMinutes()
console.log(hours);
if(minutes>10){
clock.textContent =  `${hours}: 0${minutes}`;
}
clock.textContent = `${hours}:${minutes}`;

}

setInterval(getTime,5000)