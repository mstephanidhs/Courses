import Card from './card/Card';
import './Highlights.css';

import greekSalad from '../../../../assets/greek-salad.jpg';
import bruchetta from '../../../../assets/bruchetta.svg';
import lemonDessert from '../../../../assets/lemon-dessert.jpg';

function Highlights() {
  return (
    <section className='highlights'>
      <div className='highlights-title'>
        <h1>This weeks specials!</h1>
        <button className='online-menu'>Online Menu</button>
      </div>
      <div className='cards'>
      <Card
        pathToPhoto={greekSalad}
        title='Greek Salad'
        price='$12.99'
        text='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
      />
      <Card
        pathToPhoto={bruchetta}
        title='Bruchetta'
        price='$5.99'
        text='Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oli.'
      />
      <Card
        pathToPhoto={lemonDessert}
        title='Lemon Dessert'
        price='$5.00'
        text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
      />
      </div>
    </section>
  );
}

export default Highlights;
