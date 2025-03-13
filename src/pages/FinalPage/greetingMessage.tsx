import happyEndImage from '../../assets/girl_boy.gif';
import FireworkEffect from '../../components/firework/firework.tsx';

export function GreetingMessage() {
  return (
    <div className="fade-in__basic">
      <img src={happyEndImage} alt="happyEndImage" />
      <FireworkEffect />

      <h2 style={{ textAlign: 'center' }}> 💚 HAPPY BIRTHDAY 💚</h2>
    </div>
  );
}
