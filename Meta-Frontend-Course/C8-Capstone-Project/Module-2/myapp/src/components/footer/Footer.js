import './Footer.css';

import restaurant from '../../assets/restaurant.jpg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container grid grid--footer'>
        <div className='logo-col'>
          <img src={restaurant} alt='restaurant' className='footer-img' />
        </div>

        <nav className='nav-col'>
          <p className='footer-heading'>Little Lemon</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-link' href='/'>
                Home
              </a>
            </li>
            <li>
              <a className='footer-link' href='/'>
                About
              </a>
            </li>
            <li>
              <a className='footer-link' href='/'>
                Menu
              </a>
            </li>
            <li>
              <a className='footer-link' href='/'>
                Reservations
              </a>
            </li>
            <li>
              <a className='footer-link' href='/'>
                Order Online
              </a>
            </li>
            <li>
              <a className='footer-link' href='/'>
                Login
              </a>
            </li>
          </ul>
        </nav>

        <div className='address-col'>
          <p className='footer-heading'>Contact</p>
          <p className='address-details'>
            331 E Chicago
            <br />
            LaSalle Street Chicago
            <br />
            Illinois 60602
            <br />
            USA
          </p>
          <p className='address-details'>+55 11 9999-9999</p>
          <p className='address-details'>contact@littlelemon.com</p>
        </div>

        <nav className='nav-col'>
          <p className='footer-heading'>Social Media Links</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-link' href='/'>
                Facebook
              </a>
            </li>
            <li>
              <a className='footer-link' href='/'>
                Instagram
              </a>
            </li>
            <li>
              <a className='footer-link' href='/'>
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
