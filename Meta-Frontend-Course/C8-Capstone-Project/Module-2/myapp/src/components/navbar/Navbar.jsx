import { Link } from 'react-router-dom';

import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='burger-menu' onClick={toggleMenu}>
        <div className='burger-bar'></div>
        <div className='burger-bar'></div>
        <div className='burger-bar'></div>
      </div>
      <ul className={isMenuOpen ? 'show' : ''}>
        <li>
          <Link to='/' onClick={toggleMenu}>Homepage</Link>
        </li>
        <li>
          <a href='/' onClick={toggleMenu}>About</a>
        </li>
        <li>
          <a href='/' onClick={toggleMenu}>Menu</a>
        </li>
        <li>
          <Link to='/booking' onClick={toggleMenu}>Reservations</Link>
        </li>
        <li>
          <a href='/' onClick={toggleMenu}>Order online</a>
        </li>
        <li>
          <a href='/' onClick={toggleMenu}>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
