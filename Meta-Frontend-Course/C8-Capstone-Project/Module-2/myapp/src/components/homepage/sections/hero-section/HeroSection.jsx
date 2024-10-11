import './HeroSection.css';

import food from '../../../../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className='hero-section'>
      <div className='hero-content'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to='/booking'>
          <button aria-label='Reserve a Table'>Reserve a Table</button>
        </Link>
      </div>
      <div className='hero-image'>
        <img src={food} alt='Restaurant Food' />
      </div>
    </section>
  );
}

export default HeroSection;
