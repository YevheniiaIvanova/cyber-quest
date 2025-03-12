import { useEffect, useState } from 'react';
import './style.css';

export function GlitchText({ turnOn }: { turnOn: boolean }) {
  const correctText = 'CRA'; // Код, який треба знайти
  const totalLength = 20; // Загальна довжина рядка
  const symbols = '█▓▒░@#$%&!?/XYZ123JKO(*&&uy78jjhhRTE'; // Символи для глітчу
  const [glitchedText, setGlitchedText] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const newText = Array.from({ length: totalLength }, (_, i) => {
        // Визначаємо, де вставити правильні символи
        if (i >= 3 && i < 6 && index % 6 === 0) {
          return { char: correctText[i - 3], correct: true };
        } else {
          return {
            char: symbols[Math.floor(Math.random() * symbols.length)],
            correct: false,
          };
        }
      });

      setGlitchedText(newText);
      index++;
    }, 150); // Швидкість зміни тексту

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="text-2xl font-mono glitch-text">
        {glitchedText.map((item, i) => (
          <span key={i} className={item.correct && turnOn && 'correct'}>
            {item.char}
          </span>
        ))}
      </p>
    </>
  );
}
