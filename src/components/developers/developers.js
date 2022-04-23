import './developers.css'
import symbol from '../../assets/img/symbolPic.png'


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Developers() {
  return (
    <div className='devs'>
      <div className='title'>
        <h1>Meet the makers of MIDNIGHT METAL MADNESS!</h1>
      </div>
      <div className='profiles'>
        <div className='person'>
          <a href="https://github.com/ericchu1329"><img src="https://avatars.githubusercontent.com/u/47008060?v=4" alt="EricChu" /></a>
          
          <div className='description'>
            <h2>Eric Chu</h2>
            <div className='line'></div>
            <h3>Lead Game Programmer</h3>
          </div>
          
        </div>
        <div className='person'>
          <a href="https://github.com/ecorona9"><img src="https://avatars.githubusercontent.com/u/79238407?v=4" alt="EricCorona" /></a>
          
          <div className='description'>
            <h2>Eric Corona</h2>
            <div className='line'></div>
            <h3>Game Art Designer &amp; Front End</h3>
          </div>
        </div>
        <div className='person'>
          <a href="https://github.com/AltBrian379"><img src="https://avatars.githubusercontent.com/u/46946272?v=4" alt="BrianAltamirano" /></a>
          <div className='description'>
            <h2>Brian Altamirano</h2>
            <div className='line2'></div>
            <h3>Game AI Developer</h3>
          </div>
        </div>
        <div className='person'>
          <a href="https://github.com/nikki-ps"><img src="https://avatars.githubusercontent.com/u/82796079?v=4" alt="Nicole" /></a>
          
          <div className='description'>
            <h2>Nicole Serna</h2>
            <div className='line'></div>
            <h3>Game Menu Developer</h3>
          </div>
        </div>
        <div className='person'>
          <a href="https://github.com/ctina0314"><img src="https://avatars.githubusercontent.com/u/24748981?v=4" alt="TinaCao" /></a>
          
          <div className='description'>
            <h2>Tina Cao</h2>
            <div className='line'></div>
            <h3>Game UI Developer</h3>
          </div>
        </div>
        <div className='person'>
          <a href="https://github.com/Oneupankur111"><img src="https://avatars.githubusercontent.com/u/78000192?v=4" alt="Ankur" /></a>
          <div className='description'>
            <h2>Ankur Prajapati</h2>
            <div className='line2'></div>
            <h3>Game Parallax Developer</h3>
          </div>
        </div>
        
        
        
        
        
        
      </div>
      <div className='footerSymbol'>
          <img src={symbol} alt="" />
      </div>
    </div>
  );
}

export default Developers;
