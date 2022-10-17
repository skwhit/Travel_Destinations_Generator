import {destinationsArr} from './destinations.js'


const locationsArr = destinationsArr;
const location = document.querySelector('.location')
let randomNum;
let item;

const generateDestination = document.querySelector('.generateDestination');
generateDestination.addEventListener("click", ()=>{
    randomNum = Math.floor(Math.random()*locationsArr.length)
    item = locationsArr[randomNum]
    
    console.log(item);
    document.querySelector('style').innerHTML = 
    `.destinationContainer::before {background-image: url(${item.image})}`
    location.innerHTML = `${item.location}, ${item.state} <br><br>
    Scroll down to book a flight and hotel for this destination`;
})