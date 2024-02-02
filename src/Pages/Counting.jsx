import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
     
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div >
   <div className='flex  container mx-auto border-x-4 border-[#0ece91] w-[300px]   text-white font-serif justify-center items-center  text-2xl mb-8 px-16'>
   <p className='pl-6 text-4xl'> {timeLeft.days} <hr /> <sup className='text-sm text-[#0ece91]'>D</sup></p>
    <p className='pl-6 text-4xl'> {timeLeft.hours} <hr /> <sup className='text-sm text-[#0ece91]'>H</sup></p>
    <p className='pl-6 text-4xl'> {timeLeft.minutes} <hr /> <sup className='text-sm text-[#0ece91]'>M</sup></p>
    <p className='pl-6 text-4xl' text-4xl> {timeLeft.seconds} <hr /> <sup className='text-sm text-[#0ece91]'>S</sup></p>
   </div>
  </div>
  
  );
};


const targetDate = new Date('2024-03-01T00:00:00').getTime();

const Counting = () => {
  return (
    <div>
      
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default Counting;
