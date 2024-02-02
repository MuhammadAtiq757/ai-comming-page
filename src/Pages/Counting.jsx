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
    <div className='grid lg:grid-cols-4 gap-4  container mx-auto   text-white justify-center items-center  text-3xl mb-8 px-16'>
    <p className=''>Days: {timeLeft.days}</p>
    <p className=''>Hours: {timeLeft.hours}</p>
    <p className=''>Minutes: {timeLeft.minutes}</p>
    <p className=''>Seconds: {timeLeft.seconds}</p>
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
