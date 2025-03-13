import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import QRCode from '../../components/qrcode-game/qr-code-game.tsx';
import { Button } from '../../components/button/button.tsx';
import { useState } from 'react';

export function QRCodeStep({ onClick }: { onClick: () => void }) {
  const [isSolved, setIsSolved] = useState<boolean>(false);

  return (
    <Wrapper>
      <div className="fade-in__basic">
        <div className="content">
          <QRCode isSolved={isSolved} setIsSolved={setIsSolved} />
          {isSolved && (
            <Button onClick={onClick} className="cyber-punk__button">
              Next
            </Button>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
