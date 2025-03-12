import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';

export function SendCode({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="">
        <div className="content">
          <p>
            "Останній рівень. Код розбитий, але його частини вже у тебе. З'єднай їх та відправ
            фіксеру."
          </p>

          <input type="text" />
          <Button onClick={onClick} className="cyber-punk__button">
            Send
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
