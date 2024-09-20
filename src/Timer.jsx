import React, { useState, useEffect } from 'react';

function Timer() {
  const targetDate = new Date('2024-09-28T00:00:00'); // Set target date
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center p-2 md:p-4 bg-gray-100  rounded-full shadow-lg">
      <div className="flex gap-2">
        <div className="flex flex-col items-center">
          <span className="md:text-xl text-md font-AmericanCaptainPatrius">{timeLeft.days} :</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-xl text-md font-AmericanCaptainPatrius">{timeLeft.hours} :</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-xl text-md font-AmericanCaptainPatrius ">{timeLeft.minutes}:</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="md:text-xl text-md font-AmericanCaptainPatrius ">{timeLeft.seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
