import './About.css';

import chefB from '../../../../assets/chefB.jpg';
import chefAB from '../../../../assets/chebAB.jpg';

function About() {
  return (
    <section className='about-section'>
    <div className='about-section-details'>
      <h1>Little Lemon</h1>
      <h4>Chicago</h4>
      <p>
        Little Lemon is owned by two Italian brothers, Marios and Adrian, who
        moved to the United States to pursue their shared dream of owning a
        restaurant.
      </p>
      <p>
        To craft the menu, Mario relies on family recipes and his experience as
        a chef in Italy. Adrian does all the marketing for the restaurant and
        led the effort to expand the menu beyond classic Italian to incorporate
        additional cuisines from the Mediterranean region.
      </p>
      </div>
      <div className='about-section-images'>
        <img src={chefB} alt='Chef B' className='img img-1' />
        <img src={chefAB} alt='Chef B' className='img img-2' />
      </div>
    </section>
  );
}

export default About;
