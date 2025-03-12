import { useState } from 'react';
import { Wrapper } from '../../components/wrapper/wrapper.tsx';
import { GlitchText } from '../../components/glitch-text/glitch-text.tsx';
import { Button } from '../../components/button/button.tsx';
import './style.css';

export function GlitchTextStep({ onClick }: { onClick: () => void }) {
  const [turnOn, setTurnOn] = useState(false);

  return (
    <Wrapper>
      <div className="">
        <div className={`${turnOn && 'dark'} content`}>
          <div className="header">
            <p>Код зламаний, але світло допоможе тобі побачити вірно</p>
            <button
              onClick={() => {
                setTurnOn(!turnOn);
              }}
            >
              Light
            </button>
          </div>

          <GlitchText turnOn={turnOn} />
          <Button onClick={onClick} className="cyber-punk__button">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
