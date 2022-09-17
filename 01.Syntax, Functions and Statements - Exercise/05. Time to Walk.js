function solve(steps, footprint, speed){
let distanceInMeters = steps * footprint;
let speedMetersInSec = speed / 3.6;
let time = distanceInMeters / speedMetersInSec;
let res =Math.floor( distanceInMeters / 500);

let timeInMinutes = Math.floor(time/60);
let timeInSecond =Math.ceil(time - (timeInMinutes * 60));
let timeInHours = Math.floor(time / 3600);
timeInMinutes+=res;
timeInHours+=Math.floor(timeInMinutes / 60);
timeInMinutes = timeInMinutes % 60;

let formatH = timeInHours<10 ? `0${timeInHours}` : `${timeInHours}`
let formatM = timeInMinutes<10 ? `0${timeInMinutes}` : `${timeInMinutes}`
let formatS = timeInSecond<10 ? `0${timeInSecond}` : `${timeInSecond}`
console.log(`${formatH}:${formatM}:${formatS}`);
}

solve(4000, 0.60, 5)