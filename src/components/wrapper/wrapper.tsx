import { ReactNode, useEffect, useRef } from 'react';
import './style.css';
import { Timer } from '../timer/timer.tsx';

export function Wrapper({ children, className }: { children: ReactNode; className?: string }) {
  const audioRef = useRef(new Audio('/main.mp3'));

  useEffect(() => {
    // Запускаємо музику, якщо її ще не вмикали
    if (!audioRef.current.onplaying) {
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  }, []);

  return (
    <div className="bg">
      <div className={`wrapper ${className}`}>
        <Timer />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
