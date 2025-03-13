import './style.css';

import { useEffect, useState } from 'react';

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // Очищення інтервалу при виході
  }, []);

  function getTimeLeft() {
    const targetTime = new Date(2025, 2, 15, 18, 0, 0).getTime();
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  }

  return (
    <div className="countdown">
      {timeLeft.expired ? (
        <p className="heading"> 🎁 Подарунок вже відправлено! </p>
      ) : (
        <p className="heading">
          ⏳ {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{' '}
          {timeLeft.seconds} seconds
        </p>
      )}
    </div>
  );
}
