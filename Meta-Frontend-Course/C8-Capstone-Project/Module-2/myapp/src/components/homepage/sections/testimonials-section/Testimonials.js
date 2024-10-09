import ReviewCard from './review-card/ReviewCard';
import './Testimonials.css';

import anna from '../../../../assets/connor.jpg';
import daniel from '../../../../assets/daniel.jpg';
import orestes from '../../../../assets/orestes.jpg';
import mike from '../../../../assets/mike.jpg';

function Testimonials() {
  return (
    <section className='testimonials'>
      <h1 className='testimonials-title'>What our Customers say!</h1>
      <div className='review-cards'>
        <ReviewCard
          name='Connor'
          picture={anna}
          review='I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!'
        />
        <ReviewCard
          name='Daniel'
          picture={daniel}
          review='I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!'
        />
        <ReviewCard
          name='Orestes'
          picture={orestes}
          review='I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable.'
        />
        <ReviewCard
          name='Mike'
          picture={mike}
          review='The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive.'
        />
      </div>
    </section>
  );
}

export default Testimonials;
