import './CyberpunkQuest.css';
import WelcomePage from './pages/WelcomePage/welcome.tsx';
import { useState } from 'react';
import { Step1 } from './pages/Step1/step1.tsx';
import { Step2 } from './pages/Step2/step2.tsx';

function CyberpunkQuest() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <WelcomePage onClick={() => setStep(1)} />}
      {step === 1 && <Step1 onClick={() => setStep(2)} />}
      {step === 2 && <Step2 onClick={() => setStep(3)} />}
    </>
  );
}

export default CyberpunkQuest;
