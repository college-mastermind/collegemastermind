"use client"
import React, { useState, useEffect } from 'react';

const HOURS=0;
const MINUTES=0;
const SECONDS=10;

const TimerSection = ({SAT_Timer,setSAT_Timer}) => {
  const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [seconds, setSeconds] = useState(null);

   useEffect(() => {
      setHours(parseInt(localStorage.getItem("hours")) || HOURS);
      setMinutes(parseInt(localStorage.getItem("minutes")) || MINUTES);
      setSeconds(parseInt(localStorage.getItem("seconds")) || SECONDS);
    }, []);

  const handleTimerEnd = () => {
    console.log("Timer has ended! Perform any action here.");
    setSAT_Timer(true);
  };

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      handleTimerEnd();
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        let updatedSeconds = prevSeconds - 1;
        let updatedMinutes = minutes;
        let updatedHours = hours;

        if (updatedSeconds < 0) {
          updatedSeconds = 59;
          updatedMinutes -= 1;

          if (updatedMinutes < 0) {
            updatedMinutes = 59;
            updatedHours -= 1;

            if (updatedHours < 0) {
              clearInterval(interval);
              updatedHours = 0;
              updatedMinutes = 0;
              updatedSeconds = 0;
              handleTimerEnd(); 
            }
          }
        }

        setMinutes(updatedMinutes);
        setHours(updatedHours);
        localStorage.setItem("hours", updatedHours);
        localStorage.setItem("minutes", updatedMinutes);
        localStorage.setItem("seconds", updatedSeconds);

        return updatedSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]); 

  return (
    <>
      <div className="flex justify-center items-center" >
        <div className='flex flex-col justify-center items-center w-[90%] sm:w-[1240px] h-[273px] my-10 rounded-md shadow-[0_4px_5px_0_rgba(0,0,0,0.2)] p-4' >
          <div>
            <h1 className='font-semibold text-[33px] sm:text-[50px] md:text-[56px] lg:text-[56px] bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text leading-tight text-center' >Timer is Ticking</h1>
          </div>
          <div>
            <h2 className='font-semibold text-[16px] lg:text-[24px]' >Limited Time Offer Ends Soon</h2>
          </div>

          <div className='flex space-x-4 mt-6'  >

            <div className='flex items-center justify-center flex-col' >
              <div className='h-[84px] lg:h-[88px] w-[80px] lg:w-[88px] bg-gradient-to-b from-[#447EF7] to-[#243DBC] font-semibold text-[40px] lg:text-[44px] text-white flex items-center justify-center rounded-md' >{String(hours).padStart(2, '0')}</div>
              <div className="font-semibold text-[18px] lg:text-[20px]" >Hour</div>
            </div>

            <div className='flex items-center justify-center flex-col' >
              <div className='h-[84px] lg:h-[88px] w-[80px] lg:w-[88px] bg-gradient-to-b from-[#447EF7] to-[#243DBC] font-semibold text-[40px] lg:text-[44px] text-white flex items-center justify-center rounded-md' >{String(minutes).padStart(2, '0')}</div>
              <div className="font-semibold text-[18px] lg:text-[20px]" >Minutes</div>
            </div>

            <div className='flex items-center justify-center flex-col' >
              <div className='h-[84px] lg:h-[88px] w-[80px] lg:w-[88px] bg-gradient-to-b from-[#447EF7] to-[#243DBC] font-semibold text-[40px] lg:text-[44px] text-white flex items-center justify-center rounded-md' >{String(seconds).padStart(2, '0')}</div>
              <div className="font-semibold text-[18px] lg:text-[20px]" >Second</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimerSection;
