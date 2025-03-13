import './CyberpunkQuest.css';
import WelcomePage from './pages/WelcomePage/welcome.tsx';
import { useEffect, useRef, useState } from 'react';
import { Step1 } from './pages/Step1/step1.tsx';
import { Step2 } from './pages/Step2/step2.tsx';
import { LastStep } from './pages/LastStep/laststep.tsx';
import { FinalPage } from './pages/FinalPage/finalpage.tsx';
import { BunnyCodeStep } from './pages/Step3/BunnyCodeStep.tsx';
import { BookShellStep } from './pages/Step4/BookShellStep.tsx';
import { QRCodeStep } from './pages/Step5/QRCodeStep.tsx';
import { GlitchTextStep } from './pages/Step6/GlitchTextStep.tsx';
import { SendCode } from './pages/Step7/SendCode.tsx';

function CyberpunkQuest() {
  const [step, setStep] = useState(0);
  const audioRef = useRef(new Audio('/main.mp3'));

  useEffect(() => {
    if (step === 1 && !audioRef.current.onplaying) {
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  }, [step]);

  return (
    <>
      {step === 0 && <WelcomePage onClick={() => setStep(1)} />}
      {step === 1 && <Step1 onClick={() => setStep(2)} />}
      {step === 2 && <Step2 onClick={() => setStep(3)} />}
      {step === 3 && <BunnyCodeStep onClick={() => setStep(4)} />}
      {step === 4 && <QRCodeStep onClick={() => setStep(5)} />}
      {step === 5 && <GlitchTextStep onClick={() => setStep(6)} />}
      {step === 6 && <BookShellStep onClick={() => setStep(7)} />}
      {step === 7 && <SendCode onClick={() => setStep(8)} />}
      {step === 8 && <LastStep onClick={() => setStep(9)} />}
      {step === 9 && <FinalPage />}
    </>
  );
}

export default CyberpunkQuest;
