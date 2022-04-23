import './home.css'

import back from '../../assets/img/back.png'
import mid from '../../assets/img/mid.png'
import front from '../../assets/img/front.png'
import logogif from '../../assets/img/main_logo.gif'

import gameplay1 from '../../assets/img/gameplay/gameplay.png'
import gameplay2 from '../../assets/img/gameplay/gameplay2.png'
import gameplay3 from '../../assets/img/gameplay/gameplay3.png'
import gameplay4 from '../../assets/img/gameplay/gameplay4.png'


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Home() {

  return (
    <div className='home'>
        <Parallax pages={3.13}>
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
                offset={0.9}
                speed={0.3}
                style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                }}
            />

            <ParallaxLayer
            offset={1.1}
            speed={0.6}
            factor={1.1}
            style={{
                backgroundImage: `url(${mid})`,
                backgroundSize: 'cover',
            }}
            />

            <ParallaxLayer
            offset={1.2}
            speed={0.7}
            factor={1}
            style={{
                backgroundImage: `url(${front})`,
                backgroundSize: 'cover',
            }}
            />
            <ParallaxLayer
            offset={1.95}
            speed={1}
            factor={2}
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'black'
            }}
            >
                <div className='definition'>
                    <h1>AVAILABLE  VERY SOON...</h1>
                    <h1 className='platform'>💻 WINDOWS MAC LINUX</h1>
                    <div>
                        <iframe width="1080" height="720" src="https://www.youtube.com/embed/CwkjTzX-Z_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='synopsis'>
                        <div className='main'>
                            Midnight Metal Madness is a shoot'em up shooter video game. You're a detective working in the
                            year 2149 the streets of the city of TunG_zten roam with metallic crime. Your job? Shut them down
                            and the keep the city safe! Corruption runs deep in the city and you're pulling the strings together.
                        </div>
                        <div className='columns'>
                            <div>
                                "ARGHHH! I've been working for so long I can't seem to remember my name... All I know is that the city
                                hired me to keep the streets safe but something just feels off. I feel like I know something that's 
                                really important... I just can't quite remember." As a highly trained criminal investigator for the department of SIGMA TROOP 21. The city 
                                has equipped you with some of the best technology and weapons to keep the streets safe.
                            </div>
                            <div>
                                It's common
                                to encounter rogue computer personell. There has been an increase in reports of violent robotic personall
                                attacking civilians. Our intelligence department has reported that someone has obtained the RSA encryption keys for the
                                software operative standars on robots and machines. Most likely a hacker working for the notorious ARKA1D group.
                            </div>
                        </div>
                    </div>
                    <div className='gameplayPics'>
                        <img src={gameplay1} alt="" />
                        <img src={gameplay2} alt="" />
                        <img src={gameplay3} alt="" />
                        <img src={gameplay4} alt="" />
                    </div>
                    <div className='footer'>
                        Made by students attending CSUF 2022.
                    </div>
                </div>
                
                
            </ParallaxLayer>
        </Parallax>
    </div>
  );
}

export default Home;
