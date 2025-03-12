import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { Button } from '../../components/button/button.tsx';

export function Step2({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="">
        <div className="content">
          <p className="">
            Ти отримав першу частину екіпірування. Але тобі потрібні знання й світло. Щоб побачити
            істину, тобі потрібно світло. Але не всякий промінь покаже тобі шлях. Шукай підказки у
            тінях...
          </p>
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
