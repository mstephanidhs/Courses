import { useEffect, useState } from 'react';
import ConfirmBookingForm from '../../components/confirm-booking-form/ConfirmBookingForm';
import { fetchBookingDetails } from '../../util/formData';

function ConfirmBooking() {
  const [bookingDetails, setBookingDetails] = useState({});

  useEffect(() => {
    setBookingDetails(fetchBookingDetails());
  }, []);

  return <ConfirmBookingForm bookingDetails={bookingDetails} />;
}

export default ConfirmBooking;
