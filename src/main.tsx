import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CyberpunkQuest from './CyberpunkQuest.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CyberpunkQuest />
  </StrictMode>
);
