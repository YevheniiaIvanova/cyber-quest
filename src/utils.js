import confetti from 'canvas-confetti';

export const fireworks = () => {
  const duration = 5 * 1000; // 5 секунд
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 50,
      spread: 180,
      startVelocity: 30,
      origin: { x: Math.random(), y: Math.random() * 0.5 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
