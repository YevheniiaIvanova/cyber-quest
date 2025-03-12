import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function FireworkEffect() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 200,
      startVelocity: 40,
      origin: { x: 0.5, y: 0.6 },
    });
  }, []);

  return <></>; // Нічого не рендеримо, тільки запускаємо ефект
}
