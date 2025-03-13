import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function FireworkEffect() {
  useEffect(() => {
    const end = Date.now() + 15 * 1000;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return <></>;
}
