import phone from '../../assets/phone.gif';
import happyEndImage from '../../assets/girl_boy.gif';
import './style.css';
import FireworkEffect from '../../components/firework/firework.tsx';
import '../../typing-styles.scss';

export function FinalPage() {
  return (
    <div className="welcome-page">
      <div className="container">
        <div className="image-wrapper">
          <img src={phone} alt="phone" />
        </div>
        <div className="text_container">
          <p>Connecting.... or Processing... fadeout 5 sec</p>
          <p className="type">
            Прівіт путнику, дякую тобі за допомогу, ми перемогли корпораціїї і наразі у нашому світі
            мир.
          </p>
          <p className="type">
            Прівіт путнику, дякую тобі за допомогу, ми перемогли корпораціїї і наразі у нашому світі
            мир.
          </p>
        </div>
        {/*<p className="type">*/}
        {/*  Прівіт путнику, дякую тобі за допомогу, ми перемогли корпораціїї і наразі у нашому світі*/}
        {/*  мир.*/}
        {/*</p>*/}
        {/*<p className="type">Garburator was yellow pea soup, eh?</p>*/}

        {/*<p className="type">*/}
        {/*  Tim Hortons queues too keener to the donair, and its garburator -- igloo Canuck melted,*/}
        {/*  eh? Maclean's magazine ranked pop first of tuque beer Canada's puck pissed Tim Hortons*/}
        {/*  hoser.*/}
        {/*</p>*/}

        {/*<p className="type">*/}
        {/*  The snowshoe have beaver colour in goaltender pissed hydro, and colour that queues will*/}
        {/*  have no serviette ketchup chips.*/}
        {/*</p>*/}

        {/*<p className="type">*/}
        {/*  Tim Hortons Ogopogo too stagette to the plaid flannel, and its wicket -- two-four snowshoe*/}
        {/*  melted, eh? Maclean's magazine ranked Hudson Bay first of beaver queues Canada's sorry*/}
        {/*  Royal Canned moose was plaid flannel.*/}
        {/*</p>*/}

        {/*<p className="test">Test</p>*/}
      </div>

      <div className="d-none">
        <img src={happyEndImage} alt="happyEndImage" />
        <FireworkEffect />

        <h2> HAPPY BIRTHDAY </h2>
      </div>
    </div>
  );
}
