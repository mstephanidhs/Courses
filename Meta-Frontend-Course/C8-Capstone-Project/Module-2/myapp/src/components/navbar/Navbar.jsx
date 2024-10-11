import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
        <ul>
          <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <Link to='/booking'>Reservations</Link>
          </li>
          <li>
            <a href='/'>Order online</a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;