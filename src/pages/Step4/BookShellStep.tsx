import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';

export function BookShellStep({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="">
        <div className="content">
          <p>
            Наш агент розшифрував інше послання для знаходження частини коду:
            <span>
              Загадка: "Старі архіви містять відповіді, але вони не завжди у відкритому доступі.
              Шукай там, де ховають знання. Пролий світло і відповідь явиться тобі"
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
