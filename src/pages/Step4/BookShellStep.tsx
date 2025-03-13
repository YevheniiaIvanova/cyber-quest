import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';

export function BookShellStep({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="fade-in__basic">
        <div className="content">
          <p>
            Наш агент розшифрував інше послання для знаходження частини коду:
            <div className="riddle_text">
              "Старі архіви містять відповіді, <br /> але вони не завжди у відкритому доступі.{' '}
              <br />
              Шукай там, де ховають знання. <br />
              Але будь уважним: навіть коли знайдешь потрібне, істина залишиться прихованою… доки ти
              не проллєш на неї світло."
            </div>
          </p>
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
