import { useReducer } from 'react';
import BookingForm from '../../components/booking-form/BookingForm';
import { initializeTimes, updateTimes } from '../../util/timeManagement';

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
}

export default BookingPage;
