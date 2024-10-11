let bookingDetails = {};

export const submitAPI = (formData) => {
  let flag;

  if (Math.random() < 0.5) {
    flag = false;
    console.log('Form submission failed!');
    bookingDetails = {};
  } else {
    flag = true;
    bookingDetails = { ...formData };
    console.log('Form submission was successful!');
  }

  return { flag, bookingDetails };
};

export const fetchBookingDetails = () => bookingDetails;
