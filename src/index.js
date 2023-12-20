//This project is about learning to use npm and importing, downloading packages using it.The package used in this project is day.js. 
//importing other library function using require which is from node module so this cannot be read by the browser so we need a bundler such as
//browserify,webpack etc. The one used for this project is webpack. bundlers Or webpack in the case of this project converts codes used in node
//to browser understandble code it creates a seperate file with the coverted code into dist folder. also the source code which is should be 

//importing from pacakge.

//micromodal
import MicroModal from 'micromodal';

//day js
const dayjs = require('dayjs');



//plug-ins for extending fucntions
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
var localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat)

//getting date and address/timezone.
let dayDate = dayjs().format('dddd, LL');
let address =  dayjs.tz.guess();

//dom
const time = document.getElementById('time');
const location = document.getElementById('location');
const date = document.getElementById('date');
const changeTimezone = document.getElementById('changeTimezone');
const select = document.getElementById('Timezone');

//using newObject of dayjs returned after giving it a timezone

let newDayjs = dayjs().tz(`${address}`);

//adding zero in front of single digit just to look good
function addZero(num){
    if(num < 10){
        return (`0${num}`);
    }else{
        return num;
    }
}

location.innerHTML = `${address}` + location.innerHTML ;
date.innerHTML = `${dayDate}`;

changeTimezone.onclick = () => {
    address = select.value;
    newDayjs = dayjs().tz(`${address}`);
    dayDate = newDayjs.format('dddd, LL');
    location.innerHTML = `${address} <i class="fa-solid fa-pen-to-square" id="button" data-micromodal-trigger="modal-1"></i>`;
    date.innerHTML = `${dayDate}`;
    MicroModal.close();
    MicroModal.init();
}



//function called every 1 sec to update the time.
setInterval(()=>{

    let newDayjs = dayjs().tz(`${address}`);

    let hour = newDayjs.hour();
    let minute = newDayjs.minute();
    let second = newDayjs.second();
   
    let newHour = addZero(hour);
    let newMinute = addZero(minute);
    let newSecond = addZero(second);

    time.innerHTML = `${newHour}:${newMinute}:${newSecond}`;
    // console.log(dayjs().tz("America/Toronto")); 
},1000);


// instantiate micromodal
MicroModal.init();

console.log(newDayjs.hour());
// console.log(select.value);


