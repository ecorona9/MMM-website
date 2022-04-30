import './about.css'
import symbol from '../../assets/img/symbolPic.png'

import unityLogo from '../../assets/img/logo/unity.webp'
import aseprite from '../../assets/img/logo/aseprite.png'
import guygif from '../../assets/img/gameplay/guywalking_noshooting.gif'
import enemy1 from '../../assets/img/gameplay/skurgler.gif'
import enemy2 from '../../assets/img/gameplay/klaptop.gif'
import enemy3 from '../../assets/img/gameplay/hek0.gif'
import weapon1 from '../../assets/img/gameplay/ZARPshooting.gif'
import weapon2 from '../../assets/img/gameplay/BULLXshooting.gif'
import weapon3 from '../../assets/img/gameplay/AR75shooting.gif'
import weapon4 from '../../assets/img/gameplay/HAWKSHOT1shooting.gif'
import weapon5 from '../../assets/img/gameplay/Z00-KAshooting.gif'
import collect1 from '../../assets/img/gameplay/bitcoin.gif'
import collect2 from '../../assets/img/gameplay/healthpack.gif'
import city from '../../assets/img/gameplay/justcity.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function About() {
  return (
    <div className='about'>
      <div className='title'> 
          <h1>WELCOME TO MIDNIGHT METAL MADNESS</h1>
      </div>
      <div className='description'>
          <h2>
            If you're reading this, that's because you're interested in how we made MMM, what MMM is about and what some of out art looks like. We'll address
            any questions here as a collection and gallery for anyone interested in the devleopment of our game.
          </h2>
      </div>
      <div className='description'>
          <h1>
            What kind of game is MMM?
          </h1>
          <div className='answer'>
            <h2 className='half'>
              MMM is a shoot em up genre with a cyber punk esque theme, heavily inspired from blade runner. You've probably played very similar games like Cuphead or Metal Slug.
            </h2>
            <a href="https://unity.com/"><img src={unityLogo} alt="Unity" className='img1'/></a>
            <a href="https://www.aseprite.org/"><img src={aseprite} alt="Aseprite" className='img2'/></a>
          </div>
          <div className='divider'></div>
      </div>
      
      
      
      <div className='description'>
          <h1>
            Who is the main character?
          </h1>
          <div className='answer'>
            <h2  className='half'>
              Your name is !@#$*&amp; atleast that's what you last remember. You do remember you're a detective though.
            </h2>
            <img src={guygif} alt="Guy_MMM" className='img3'/>
          </div>
          <div className='divider'></div>
      </div>
      <div className='description'>
          <h1>
            What kind of enemies does MMM have?
          </h1>
          <div className='answer'>
            <h2>
              When you play the game you'll encounter, KLAP-TOP's, HEK0's and SKURGLER's.
            </h2>
            
          </div>
          <div className='images'>
            <img src={enemy1} alt="Skurgler" className='skurg'/>
            <img src={enemy2} alt="Klaptop" className='klap'/>
            <img src={enemy3} alt="Hek0" className='hek'/>
          </div>
          
          <div className='divider'></div>
      </div>
      <div className='description'>
          <h1>
            What types of weapons can you use in MMM?
          </h1>
          <div className='answer'>
            <h2>
              There are 5 weapons in total. ZARP Pistol, BULLX Shotgun, AR75 Machine Gun, HAWKSHOT1 Sniper and Z00-KA Bazooka.
            </h2>
            
          </div>
          <div className='images'>
            <img src={weapon1} alt="ZARP Pistol" className='wep1'/>
            <img src={weapon2} alt="BULLX Shotgun" className='wep2'/>
            <img src={weapon3} alt="AR75 Machine Gun" className='wep3'/>
            <img src={weapon4} alt="HAWKSHOT1 Sniper" className='wep4'/>
            <img src={weapon5} alt="Z00KA Bazooka" className='wep5'/>
          </div>
          
          <div className='divider'></div>
      </div>
      <div className='description'>
          <h1>
            What kind of collectables does MMM have?
          </h1>
          <div className='answer'>
            <h2>
              As a player you can collect bitcoins and health packs.
            </h2>
            
          </div>
          <div className='images'>
            <img src={collect1} alt="Bitcoin" className='col1'/>
            <img src={collect2} alt="Health Pack" className='col2'/>
          </div>
          
          <div className='divider'></div>
      </div>
      <div className='description'>
          <h1>
            What does the city of TunG_zten look like?
          </h1>
          <div className='answer'>
            <h2>
              See for yourself...
            </h2>
            
          </div>
          <div className='images'>
            <img src={city} alt="TunG_zten" className='city'/>
          </div>
          
          <div className='divider'></div>
      </div>
    </div>
  );
}

export default About;
