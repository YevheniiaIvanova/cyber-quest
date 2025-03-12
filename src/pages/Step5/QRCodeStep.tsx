import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import QRCode from '../../components/qrcode-game/qr-code-game.tsx';
import { Button } from '../../components/button/button.tsx';

export function QRCodeStep({ onClick }: { onClick: () => void }) {
  return (
    <Wrapper>
      <div className="">
        <div className="content">
          <QRCode />
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
