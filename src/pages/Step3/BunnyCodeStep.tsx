import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';

export function BunnyCodeStep({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="fade-in__basic">
        <div className="content">
          <p>
            Ти отримав необхідний артефакт, який тобі допоможе бачити таємні послання.
            <br />
            В цей час наш агент зміг розшифрувати послання для знаходження частини коду:
            <br />
            <div className="riddle_text">
              "Де смачно буває та Стеша відпочиває, маленький білий кролик таємницю доглядає"
            </div>
            <br />
            <span className="small_text">
              P.S. краще взяти ручку та листочок, для того щоб записувати коди
            </span>
          </p>
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
