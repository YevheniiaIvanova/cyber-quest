import { useState, useEffect } from 'react';

export default function ConnectingText() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500); // Каждые 500 мс добавляется точка

    return () => clearInterval(interval);
  }, []);

  return <p className="connecting">Connecting{dots}</p>;
}
