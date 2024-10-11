import { Link } from 'react-router-dom';
import './ConfirmBookingForm.css';

function ConfirmBookingForm({ bookingDetails }) {
  return (
    <section className='confirm-booking'>
      <h1 className='confirm-booking-title'>Thank you for your reservation</h1>
      <p className='confirm-booking-text'>
        We look forward to seeing you at Little Lemon Restaurant
      </p>
      <div className='confirmation-details'>
        <div className='confirmation-details-content'>
          <h4 className='confirmation-details-title'>Confirmation Details</h4>
          <p>
            <span>Occasion:</span> {bookingDetails.occasion}
          </p>
          <p>
            <span>Guests:</span> {bookingDetails.guests}
          </p>
          <p>
            <span>Date:</span> {bookingDetails.date}
          </p>
          <p>
            <span>Time:</span> {bookingDetails.time}
          </p>
        </div>
      </div>
      <Link to='/'>
        <button aria-label='Back to homepage' className='confirmation-booking-button'>Back Home</button>
      </Link>
    </section>
  );
}

export default ConfirmBookingForm;
