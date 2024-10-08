import './Header.css'

import logo from '../../assets/Logo.svg';
import Navbar from '../navbar/Navbar';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Little Lemon Logo' />
      <Navbar />
    </header>
  );
}

export default Header;
