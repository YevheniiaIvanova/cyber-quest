import React, { useState, useEffect } from 'react';
import './style.css';

export default function QRCode({
  isSolved,
  setIsSolved,
}: {
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;
}) {
  const [pieces, setPieces] = useState<string[]>([]);
  const [dragging, setDragging] = useState<number | null>(null);

  useEffect(() => {
    const initialPieces = new Array(16).fill(null).map((_, index) => {
      const row = Math.floor(index / 4); // 4 рядки
      const col = index % 4; // 4 стовпці
      return {
        backgroundPosition: `-${col * 100}px -${row * 100}px`,
        order: index,
      };
    });
    setPieces(shuffle(initialPieces));
  }, []);

  const shuffle = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (dragging !== null) {
      const newPieces = [...pieces];
      const temp = newPieces[index];
      newPieces[index] = newPieces[dragging];
      newPieces[dragging] = temp;
      setPieces(newPieces);
      setDragging(null);

      // Перевірка на правильність
      if (newPieces.every((piece, idx) => piece.order === idx)) {
        setIsSolved(true);
      }
    }
  };

  return (
    <div className="qr-code-game">
      {!isSolved && <p>Код розбитий на уламки, спробуй його відновити</p>}
      {isSolved && <p>Код відновлено</p>}
      <div
        className="puzzle-board"
        style={{
          width: '400px',
          height: '400px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 100px)',
          gridTemplateRows: 'repeat(4, 100px)',
          gap: '5px',
          marginBottom: '20px',
        }}
      >
        {pieces.length === 0 && <p>Зображення ще не завантажено...</p>}
        {pieces.map((piece, index) => (
          <div
            key={index}
            className="piece"
            style={{
              width: '100px',
              height: '100px',
              backgroundImage: 'url("src/assets/qr.png")',
              backgroundSize: '400px 400px',
              backgroundPosition: piece.backgroundPosition,
              cursor: 'move',
              border: '2px solid #d714fe',
              backgroundColor: '#fff',
            }}
            draggable
            onDragStart={() => setDragging(index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
          ></div>
        ))}
      </div>
    </div>
  );
}
