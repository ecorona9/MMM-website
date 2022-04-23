import './home.css'

import back from '../../assets/img/back.png'
import mid from '../../assets/img/mid.png'
import front from '../../assets/img/front.png'
import logogif from '../../assets/img/main_logo.gif'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Home() {

  return (
    <>
        <ParallaxLayer 
              offset={0.2}
              speed={0.1}
              factor={0.3}
              style={{
                backgroundSize: 'cover',
              }}
            >
              <div className="wrap">
                <img className="logo" src={logogif} alt="" />
                
              </div>        
          </ParallaxLayer>

          <ParallaxLayer 
              offset={1}
              speed={0.3}
              style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
              }}
            />

          <ParallaxLayer
            offset={1.4}
            speed={0.6}
            factor={1.5}
            style={{
              backgroundImage: `url(${mid})`,
              backgroundSize: 'cover',
          }}
          />

          <ParallaxLayer
            offset={1.6}
            speed={0.7}
            factor={2}
            style={{
              backgroundImage: `url(${front})`,
              backgroundSize: 'cover',
          }}
          />
          <ParallaxLayer
            offset={1.9}
            speed={1}
            factor={1}
          >
            <h2>lorem</h2>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            factor={7}
          >
            <h2>lorem2</h2>
          </ParallaxLayer>
    </>
  );
}

export default Home;
