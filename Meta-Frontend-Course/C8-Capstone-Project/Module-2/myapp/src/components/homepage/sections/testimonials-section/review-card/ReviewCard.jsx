import './ReviewCard.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholderimg from '../../../../../assets/placeholder.svg';

import star from '../../../../../assets/star.svg';

function ReviewCard({ name, picture, review }) {
  return (
    <div className='review-card'>
      <div className='review-details'>
        <div className='review-img-stars'>
          <LazyLoadImage
            placeholderSrc={placeholderimg}
            effect='blur'
            src={picture}
            alt='Reviewer'
          />
          <div className='stars'>
            <img src={star} alt='full star' className='star' />
            <img src={star} alt='full star' className='star' />
            <img src={star} alt='full star' className='star' />
            <img src={star} alt='full star' className='star' />
            <img src={star} alt='full star' className='star' />
          </div>
        </div>
        <p className='review-details-title'>{name}</p>
        <p className='review'>{review}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
