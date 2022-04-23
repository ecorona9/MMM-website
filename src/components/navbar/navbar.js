import './navbar.css'

import { Link } from "react-router-dom";

function Navbar() {

    function click() {
        console.log('clicked')
    }



  return (
    <div className='navbar'>
        <div className='left'>
            <button onClick={click}>PLAY GAME</button>
        </div>
        <div className='right'>
            <Link className="btn" to="/"><button>HOME</button></Link>
            <Link className="btn" to="developers"><button>DEVELOPERS</button></Link>
            <Link className="btn" to="about"><button>ABOUT</button></Link>
        </div>
    </div>
  );
}

export default Navbar;
