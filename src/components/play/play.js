import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

import './play.css'
import symbol from '../../assets/img/symbolPic.png'

const unityContext = new UnityContext({
  loaderUrl: "mmm/Build/Midnight Metal Madness.loader.js",
  dataUrl: "mmm/Build/Midnight Metal Madness.data",
  frameworkUrl: "mmm/Build/Midnight Metal Madness.framework.js",
  codeUrl: "mmm/Build/Midnight Metal Madness.wasm",
});

function Play() {
  return (
    <div className='game'>
      <Unity unityContext={unityContext}/>
    </div>
  );
}

export default Play;
