import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';
import './style.css';

export function LastStep({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="last-step__wrapper">
        <div className="content">
          <p className="riddle_text" style={{ textAlign: 'center', marginTop: '100px' }}>
            Дані успішно зашифровані та передані. <br />
            Твій контрактор вже отримав повідомлення і через декілька хвилин зв'яжеться із тобою.
          </p>
          <Button onClick={onClick} className="cyber-punk__button">
            Exit
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
