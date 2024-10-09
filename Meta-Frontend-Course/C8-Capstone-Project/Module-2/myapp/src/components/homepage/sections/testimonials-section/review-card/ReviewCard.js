import './ReviewCard.css';

import star from '../../../../../assets/star.svg';

function ReviewCard({ name, picture, review }) {
  return (
    <div className='review-card'>
      <div className='review-details'>
        <div className='review-img-stars'>
          <img src={picture} alt='Reviewer' />
          <div className='stars'>
            <img src={star} alt='full star' className='star'/>
            <img src={star} alt='full star' className='star'/>
            <img src={star} alt='full star' className='star'/>
            <img src={star} alt='full star' className='star'/>
            <img src={star} alt='full star' className='star'/>
          </div>
        </div>
        <p className='review-details-title'>{name}</p>
        <p className='review'>{review}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
