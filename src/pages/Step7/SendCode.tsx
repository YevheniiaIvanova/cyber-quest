import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';
import './style.css';
import { FormEvent, useState } from 'react';

export function SendCode({ onClick }: { onClick: () => void }) {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const correctCode = 'CORPSECRACK_01';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === correctCode.toLowerCase()) {
      setIsCorrect(true);
      onClick();
    } else {
      alert(
        'Неправильний код! Спробуй еще раз. P.S. Якщо буде дуже важко, викоростай dev tools' + ' ;)'
      );
    }
  };

  return (
    <Wrapper>
      <div className="fade-in__basic">
        <div className="content">
          <p className="text-content">
            "Останній рівень. Код розбитий, але його частини вже у тебе. <br />
            З'єднай їх та відправ фіксеру."
          </p>

          <div>
            {!isCorrect ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter code"
                />
                <Button type="submit" className="cyber-punk__button">
                  Send code
                </Button>
              </form>
            ) : (
              <p>✅ Код верный! Доступ открыт.</p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
