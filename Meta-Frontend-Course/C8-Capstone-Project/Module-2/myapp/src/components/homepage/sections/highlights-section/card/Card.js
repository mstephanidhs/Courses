import './Card.css';

function Card({ pathToPhoto, title, price, text }) {
  return (
    <div className='card-item'>
      <img src={pathToPhoto} alt='Food dish' />
      <div className='card-rest-info'>
        <div className='card-details'>
          <h2 className='card-title'>{title}</h2>
          <p className='price'>{price}</p>
        </div>
        <p className='card-text'>{text}</p>
        <p className='card-ref'>
          <a href='/'>Order a delivery {String.fromCharCode(8594)}</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
