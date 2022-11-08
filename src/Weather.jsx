import {  useCallback } from "react";
import { useState } from "react";
import "./index.css";
import './Sidebar.css'
import "./App.css";

const Weather = ({weather}) => {
console.log(weather)
const [weathercode, setWeathercode] = useState(1)




// Day definition for header
//[FIXME:] refactor me into a fn
const time = new Date()
const options = { weekday: 'long', month: 'long', day: 'numeric'}
const timeDisplay = time.toLocaleDateString('en-EN', options)


// Hourly time definition

 let commencons = new Date();
// // let dateTemps = commencons.getHours(); 
var date2 = new Date(Date.now() + 1000 * 60 * 60 * 1); // Add 2 hours.
let dateTemps2 = date2.getHours();
var date3 = new Date(Date.now() + 1000 * 60 * 60 * 2); // Add 3 hours.
// let dateTemps3 = date3.getHours();
var date4 = new Date(Date.now() + 1000 * 60 * 60 * 3); // Add 4 hours.
// let dateTemps4 = date4.getHours();
var date5 = new Date(Date.now() + 1000 * 60 * 60 * 4); // Add 5 hours.
// let dateTemps5 = date5.getHours();
  


//  Daily time function to display intel



  const weekdays = [
   "monday",
   "tuesday",
   "wednesday",
   "thursday",
   "friday",
   "saturday",
   "sunday",
  ]
// weekdays.map((weekday, i) => console.log(0))
   let dateday = commencons.getDay();
   var dateB = new Date(Date.now() + 1000 * 60 * 60 * 24); 
 let dateC = new Date(Date.now() + 1000 * 60 * 60 * 24*2);
 let dateD = new Date(Date.now() + 1000 * 60 * 60 * 24*3);
 let dateE = new Date(Date.now() + 1000 * 60 * 60 * 24*4);
// [FIXME] refactor into map

 let day0 = weekdays[dateday]
 let day1 = weekdays[dateB.getDay()];
 let day2 = weekdays[dateC.getDay()]
 let day3 =  weekdays[dateD.getDay()];
 let day4 = weekdays[dateE.getDay()]


//  const handleKeyPress = useCallback((event) => {
//   if ( event.key ==="k" && event.ctrlKey === true )
// // {  console.log(`Key pressed: ${event.key}`);}
// document.getElementById('input').focus()
// }, []);

// // useEffect(() => {
// //   // attach the event listener
// //   document.addEventListener('keydown', handleKeyPress);

// //   // remove the event listener
// //   return () => {
// //     document.removeEventListener('keydown', handleKeyPress);
// //   };
// // }, [handleKeyPress]);

  return (
 
    <div
    // style={{background : weathercode === 1 ? "linear-gradient(to top, #fc4a1a, #f7b733)" : null}}
      id="bg"
      className="	h-1/8 text-center overflow-hidden"

    >
      <div className="h-1/2 flex flex-col	">
        {/* header */}
        <div id="cont" className="h-1/4 flex flex-row justify-center">
          <div className=" flex basis-1/4 self-center justify-center font-display text-xl	text-white ">
           
            <svg className=" h-10 mt-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="weather android app aplication phone"><path d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zm-2 14.83a6 6 0 0 1-5.28 5.28 63.65 63.65 0 0 1-14.6 0 6 6 0 0 1-5.26-5.28 63.65 63.65 0 0 1 0-14.6A6 6 0 0 1 8.7 3.42a63.65 63.65 0 0 1 14.6 0 6 6 0 0 1 5.28 5.28 63.65 63.65 0 0 1 0 14.6z"/><path d="M22 24H10a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zM25 20h-1.07a8 8 0 0 0-15.86 0H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2zm-14.92 0a6 6 0 0 1 11.84 0zM16 12a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zM9.93 13.93a1 1 0 0 0 0-1.42L7.1 9.69a1 1 0 1 0-1.41 1.41l2.82 2.83a1 1 0 0 0 1.42 0zM24.9 9.69l-2.83 2.82a1 1 0 0 0 1.42 1.42l2.82-2.83a1 1 0 0 0-1.41-1.41z"/></g></svg>
            
          
          </div>

          <p className="self-center font-display text-base	text-white basis-2/4 mt-6">
            {timeDisplay}
          </p>

          <div className="basis-1/4 self-center font-display text-base	text-white mt-6">
            <p>°C</p>
          </div>
        </div>
        {/* Header */}
       
     
     
      {/* Daily Intel  */}
    </div>
    </div>
  );
};


export default Weather
