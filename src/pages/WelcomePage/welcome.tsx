import { Button } from '../../components/button/button.tsx';
import './style.css';

function WelcomePage({ onClick }: { onClick?: () => void }) {
  return (
    <div className="welcome-page">
      <div className="terminal">
        <p>Ти обраний для виконання місії!!!</p>
        <p>Світло неону кличе....</p>
        <p>Чи готовий ти увійти до гри?</p>
      </div>
      <div className="button_wrapper">
        <Button className="button flicker button-no">Hell, NO</Button>
        <Button className="button flicker" onClick={onClick}>
          YES, I'm ready
        </Button>
      </div>

      <div className="scanline"></div>
    </div>
  );
}

export default WelcomePage;
