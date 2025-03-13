import { ReactNode } from 'react';
import './style.css';
import { Timer } from '../timer/timer.tsx';

export function Wrapper({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="bg">
      <div className={`wrapper ${className}`}>
        <Timer />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
