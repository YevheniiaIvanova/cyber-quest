import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';

export function Step2({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="fade-in__basic">
        <div className="content">
          <p style={{ textAlign: 'center', lineHeight: 3 }}>
            Ти отримав першу частину екіпірування. <br />
            Але тобі потрібні знання й світло. <br />
            Щоб побачити істину, тобі потрібно світло. <br />
            Але не всякий промінь покаже тобі шлях. <br />
            <span className="text--underline">Шукай підказки у тінях...</span>
          </p>
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
