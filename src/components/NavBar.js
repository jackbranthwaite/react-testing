import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
    const [click, setClick] = useState(false)
    
    const handleClick= () => {
        setClick(!click);
    }

  return <>
    <div className="navbar">
        <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
                <MdFingerprint className='navbar-icon'/>
                Testing
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}    
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-links">
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cv" className="nav-links">
                        CV
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-links">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  </>;
}

export default NavBar;
