import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';
import './style.css';
import { useState } from 'react';

export function Step1({ onClick }: { onClick: () => void }) {
  const [nextInstruction, setNextInstruction] = useState(false);

  const onClickNext = () => {
    if (!nextInstruction) {
      setNextInstruction(true);
    } else {
      onClick();
    }
  };

  return (
    <Wrapper className="fade-in">
      <div className="step1_wrapper">
        <div className="content">
          <p className={`${nextInstruction ? 'd-none' : ''}`}>
            У місті майбутнього, де корпорації контролюють все, існує легенда про
            <span className="text--pink"> "Код Останньої Свободи" </span>— програму, яка може
            зламати систему та повернути контроль людям.
            <br /> Але цей код розбитий на фрагменти й захований у глибинах кіберпростору. Тобі
            потрібно розгадати всі загадки, знайти необхідні артефакти та розшифрувати код, щоб
            отримати свою нагороду.
          </p>

          <div className={`${!nextInstruction ? 'd-none' : 'secret-code__wrapper fade-in__basic'}`}>
            <p>
              Але першечергово тобі потрібно отримати екіпірування. Твій доступ заблокований, але є
              один ключ... Щоб його знайти тобі потрібно розгадати повідомлення з підказкою де
              знаходиться ключ.
            </p>
            <div className="secret-code">
              <h3 className="secret-code__txt">010001100111001001101001011001000110011101100101</h3>
              <button
                className="button_icon copy_button"
                onClick={() => {
                  navigator.clipboard.writeText('010001100111001001101001011001000110011101100101');
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Button onClick={onClickNext} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
