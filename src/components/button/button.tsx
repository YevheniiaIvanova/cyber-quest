import { ReactNode } from 'react';
import './button.css';

export function Button({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
