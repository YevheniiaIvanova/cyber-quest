import { ReactNode } from 'react';
import './button.css';

export function Button({
  children,
  onClick,
  className,
  type = 'button',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'submit' | 'button';
}) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
