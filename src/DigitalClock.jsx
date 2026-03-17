import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {

    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(handleTime,1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function handleTime(){
        setTime(new Date())
    }

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = (hours >= 12 ? "PM" : "AM");

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
    }

    function addZero(number){
        return (number < 10 ? "0" : "") + number;
    }

  return (
    <>
      <div className="clock-container">
        <div className="time-display">
            <span>{formatTime()}</span>
        </div>
      </div>
    </>
  )
}

export default DigitalClock;
