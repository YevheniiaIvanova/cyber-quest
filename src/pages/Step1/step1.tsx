import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';
import './style.css';

export function Step1({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="step1_wrapper">
        <div className="content">
          <p className="">
            У місті майбутнього, де корпорації контролюють все, існує легенда про
            <>"Код Останньої Свободи"</>— програму, яка може зламати систему та повернути контроль
            людям. Але цей код розбитий на фрагменти й захований у глибинах кіберпростору. Тобі
            потрібно розгадати всі загадки, знайти необхідні артефакти та розшифрувати код, щоб
            отримати свою нагороду.
          </p>
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
