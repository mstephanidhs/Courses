import './Card.css';
import placeholderimg from '../../../../../assets/placeholder.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Card({ pathToPhoto, title, price, text }) {
  return (
    <div className='card-item'>
      <LazyLoadImage
        src={pathToPhoto}
        alt='Food dish'
        placeholderSrc={placeholderimg}
        effect='blur'
      />
      <div className='card-rest-info'>
        <div className='card-details'>
          <h2 className='card-title'>{title}</h2>
          <p className='price'>{price}</p>
        </div>
        <p className='card-text'>{text}</p>
        <p className='card-ref'>
          <a aria-label='Order a delivery' href='/'>Order a delivery {String.fromCharCode(8594)}</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
