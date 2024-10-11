import { useFormik } from 'formik';
import * as Yup from 'yup';
import occasions from '../../util/occasions';

import './BookingForm.css';
import formatDate from '../../util/formatDate';
import { useEffect, useState } from 'react';
import { submitAPI } from '../../util/formData';
import { Link, useNavigate } from 'react-router-dom';
import getRandomNumber from '../../util/randomIDGenerator';

function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();
  const [formSubmit, setFormSubmit] = useState(true);

  const today = new Date(Date.now());
  const formattedDate = formatDate(today);

  const formik = useFormik({
    initialValues: {
      date: formattedDate,
      time: availableTimes.times[0],
      guests: 1,
      occasion: 'Birthday',
    },
    onSubmit: (values) => {
      const result = submitAPI(values);

      if (result.flag) {
        setFormSubmit(true);
        navigate(`/booking/${getRandomNumber()}`);
      } else {
        setFormSubmit(false);
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required!'),
      time: Yup.string().required('Time is required!'),
      guests: Yup.number()
        .min(1, 'Must be at least 1!')
        .max(10, 'Must be at most 10!')
        .required('Number of guests is required!'),
      occasion: Yup.string().oneOf(occasions).required('Occasion is required'),
    }),
  });

  useEffect(() => {
    dispatch({ type: 'UPDATE_TIMES', date: new Date(formik.values.date) });
  }, [dispatch, formik.values.date]);

  return (
    <section className='booking-section'>
      <form onSubmit={formik.handleSubmit} className='booking-form'>
        <h1 className='booking-title'>Book Now</h1>
        <div className='form-fields'>
          <div className='fields'>
            <label htmlFor='date'>Choose Date</label>
            <input
              className='field'
              type='date'
              id='date'
              name='date'
              data-testid='res-date'
              {...formik.getFieldProps('date')}
              onChange={formik.handleChange}
            />
            {formik.touched.date && formik.errors.date ? (
              <div data-testid='res-date-error' className='field-error'>
                {formik.errors.date}
              </div>
            ) : null}
          </div>
          <div className='fields'>
            <label htmlFor='time'>Choose Time</label>
            <select
              id='time'
              name='time'
              className='field'
              {...formik.getFieldProps('time')}
              onChange={formik.handleChange}
              data-testid='res-time'
            >
              {availableTimes.times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time ? (
              <div data-testid='res-time-error' className='field-error'>
                {formik.errors.time}
              </div>
            ) : null}
          </div>
          <div className='fields'>
            <label htmlFor='guests'>Number of Guests</label>
            <input
              type='number'
              id='guests'
              name='guests'
              min='1'
              max='10'
              className='field'
              data-testid='res-guests'
              {...formik.getFieldProps('guests')}
              onChange={formik.handleChange}
            />
            {formik.touched.guests && formik.errors.guests ? (
              <div data-testid='res-guests-error' className='field-error'>
                {formik.errors.guests}
              </div>
            ) : null}
          </div>
          <div className='fields'>
            <label htmlFor='occasion'>Occasion</label>
            <select
              id='occasion'
              name='occasion'
              className='field'
              data-testid='res-occasion'
              {...formik.getFieldProps('occasion')}
              onChange={formik.handleChange}
            >
              {occasions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
            {formik.touched.occasion && formik.errors.occasion ? (
              <div data-testid='res-occasion-error' className='field-error'>
                {formik.errors.occasion}
              </div>
            ) : null}
          </div>
          {!formSubmit ? (
              <div data-testid='res-form-error' className='field-error'>
                The submission of the form was not successful!
              </div>
            ) : null}
        </div>
        <div className='form-buttons'>
          <Link to='/'>
            <input
              type='button'
              value='Cancel'
              className='button cancel-button'
              aria-label='cancel booking button'
            />
          </Link>
          <input
            type='submit'
            value='Reserve'
            className='button submit-button'
            aria-label='reserve booking button'
          />
        </div>
      </form>
    </section>
  );
}

export default BookingForm;
