import './card.css';
import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="card-content">{children}</div>
    </div>
  );
}
