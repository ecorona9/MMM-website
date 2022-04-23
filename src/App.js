import './App.css'


import Navbar from './components/navbar/navbar.js'
import Home from './components/home/home.js'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
    <div className='background'></div>
      <Parallax pages={3}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        
      </Parallax>
    </>
  );
}

export default App;
