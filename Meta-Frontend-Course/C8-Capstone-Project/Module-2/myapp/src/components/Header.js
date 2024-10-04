import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt='Little Lemon Logo' />
      <nav>
        <ul>
          <li>
            <a href='/home'>Homepage</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <a href='/reservations'>Reservations</a>
          </li>
          <li>
            <a href='/orderOnline'>Order online</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
