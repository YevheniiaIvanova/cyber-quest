import phone from '../../assets/phone.gif';
import './style.css';
import ConnectingText from './ConnectingText.tsx';
import { useEffect, useState } from 'react';
import { GreetingMessage } from './greetingMessage.tsx';
import './typing.css';

export function FinalPage() {
  const [showGreeting, setShowGreeting] = useState(false); // Стейт для привітання
  const [showMessage, setShowMessage] = useState(false);
  const [showConnecting, setShowConnecting] = useState(true);

  useEffect(() => {
    const connectingTimer = setTimeout(() => {
      setShowConnecting(false);
      setShowMessage(true);
    }, 6000);

    const timer = setTimeout(() => {
      setShowMessage(false);
      setShowGreeting(true);
    }, 28000);

    return () => {
      clearTimeout(connectingTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="welcome-page">
      {showConnecting && <ConnectingText />}
      {showMessage && (
        <div className="message">
          <div className="image-wrapper">
            <img src={phone} alt="phone" />
          </div>

          <div className="container">
            <div className="typing-container">
              <p>Привіт, мандрівнику.</p>
              <p>
                Ми зламали систему, корпорації зазнали поразки, і тепер у цьому світі панує мир.
              </p>
              <p>Дякую, що пройшов цей шлях зі мною. Ти – справжній союзник.</p>
              <p>У мене залишилась остання місія, але про неї ти дізнаєшся трохи пізніше.</p>
              <p>Я надішлю тобі доставку десь о 18:00.</p>
              <p>А поки що тримай останнє послання...</p>
            </div>
          </div>
        </div>
      )}

      {showGreeting && <GreetingMessage />}
    </div>
  );
}
