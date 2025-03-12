import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';

export function BunnyCodeStep({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="">
        <div className="content">
          <p>Ти отримав необхідний артефакт, який тобі допоможе бачити таємні послання.</p>
          <p>
            В цей час наш агент зміг розшифрувати послання для знаходження частини коду:
            <span>
              "Де смачно буває та Стеша відпочиває, маленький білий кролик таємницю доглядає"
            </span>
            <span>P.S. краще взяти ручку та листочок, для того щоб записувати коди</span>
          </p>
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
