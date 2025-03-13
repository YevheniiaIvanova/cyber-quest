import phone from '../../assets/phone.gif';
import './style.css';
import '../../typing-styles.scss';
import ConnectingText from './ConnectingText.tsx';
import { useEffect, useState } from 'react';
import { GreetingMessage } from './greetingMessage.tsx';

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
    }, 40000);

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
          <div className="text_container">
            <p className="type">Привіт, мандрівнику.</p>
            <p className="type">
              Ми зламали систему, корпорації зазнали поразки, і тепер у цьому світі панує мир.
            </p>
            <p className="type">Дякую, що пройшов цей шлях зі мною. Ти – справжній союзник.</p>
            <p className="type">
              Але в мене залишилося ще одне завдання: доставка чистої системи та останього
              посилання.
            </p>
            <p className="type"> Почекай трохи – послання незабаром з'явиться.</p>
            <p className="type">А доставка чистої системи вже в дорозі. Очікуй її о 18:00. </p>
            <p className="test">Test</p>
          </div>
        </div>
      )}

      {showGreeting && <GreetingMessage />}
    </div>
  );
}
