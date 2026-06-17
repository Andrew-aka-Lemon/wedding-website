import { useState, useEffect } from 'react';

function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function getUkrainianPlural(number, forms) {
  // forms = [one, few, many] e.g. ['день', 'дні', 'днів']
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}

const timeLabels = {
  days: ['день', 'дні', 'днів'],
  hours: ['година', 'години', 'годин'],
  minutes: ['хвилина', 'хвилини', 'хвилин'],
  seconds: ['секунда', 'секунди', 'секунд'],
};

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return {
    ...timeLeft,
    labels: {
      days: getUkrainianPlural(timeLeft.days, timeLabels.days),
      hours: getUkrainianPlural(timeLeft.hours, timeLabels.hours),
      minutes: getUkrainianPlural(timeLeft.minutes, timeLabels.minutes),
      seconds: getUkrainianPlural(timeLeft.seconds, timeLabels.seconds),
    },
  };
}
