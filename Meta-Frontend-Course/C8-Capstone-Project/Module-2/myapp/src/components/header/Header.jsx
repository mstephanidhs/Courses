import './Header.css';

import logo from '../../assets/Logo.svg';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='Little Lemon Logo' />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
