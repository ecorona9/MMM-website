import './App.css'


import Navbar from './components/navbar/navbar.js'
import Home from './components/home/home.js'
import Developers from './components/developers/developers.js'
import Play from './components/play/play.js'
import About from './components/about/about.js'


import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      <div className='background'></div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/developers" element={<Developers />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/play" element={<Play />}/>
        </Routes>
    </>
  );
}

export default App;
