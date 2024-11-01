import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 1,
    seconds: 2,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        // Increment seconds
        seconds--;

        // Handle overflow for seconds
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }

        // Handle overflow for minutes
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        // Handle overflow for hours (reset to 0 after 24)
        if (hours < 0) {
          hours = 23;
        }

        return { hours, minutes, seconds };
      });
    }, 1000); // Every second

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Add leading zero if the number is less than 10
  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="flex gap-20">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold">Hours</p>
        <div className="timer-bg font-bebas font-normal leading-[86.4px] text-left">
          {formatTime(time.hours)}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold">Minutes</p>
        <div className="timer-bg font-bebas font-normal leading-[86.4px] text-left">
          {formatTime(time.minutes)}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-semibold">Seconds</p>
        <div className="timer-bg s font-normal leading-[86.4px] text-left font-robotoCondensed tracking-tighter">
          {formatTime(time.seconds)}
        </div>
      </div>
    </div>
  );
};
export default Timer;
