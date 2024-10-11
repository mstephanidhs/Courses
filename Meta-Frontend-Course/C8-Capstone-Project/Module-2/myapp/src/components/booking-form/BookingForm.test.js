import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { fetchTimesAPI, initializeTimes, updateTimes } from '../../util/timeManagement';
import { submitAPI } from '../../util/formData';

test('Renders labels and fields', () => {
  render(
    <BookingForm
      availableTimes={{
        times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      }}
      dispatch={jest.fn((action) => action)}
    />
  );

  // Date label and field
  const chooseDateLabel = screen.getByText('Choose Date');
  expect(chooseDateLabel).toBeInTheDocument();
  const choseDateField = screen.getByTestId('res-date');
  expect(choseDateField).toBeInTheDocument();

  // Time label and field
  const chooseTimeLabel = screen.getByText('Choose Time');
  expect(chooseTimeLabel).toBeInTheDocument();
  const chooseTimeField = screen.getByTestId('res-time');
  expect(chooseTimeField).toBeInTheDocument();

  // Number of guests label and field
  const numberGuestLabel = screen.getByText('Number of Guests');
  expect(numberGuestLabel).toBeInTheDocument();
  const numberGuestField = screen.getByTestId('res-guests');
  expect(numberGuestField).toBeInTheDocument();

  // Occasion label and field
  const chooseOccasionLabel = screen.getByText('Occasion');
  expect(chooseOccasionLabel).toBeInTheDocument();
  const chooseOccasionField = screen.getByTestId('res-occasion');
  expect(chooseOccasionField).toBeInTheDocument();

  // Submit Button
  const submitButton = screen.getByDisplayValue('Submit');
  expect(submitButton).toBeInTheDocument();

  // Cancel Button
  const cancelButton = screen.getByDisplayValue('Cancel');
  expect(cancelButton).toBeInTheDocument();
});

test('InitializeTimes returns the correct expected value', () => {
  const today = new Date();
  const initialState = initializeTimes();

  const expectedResult = { times: fetchTimesAPI(today) };

  expect(initialState).toEqual(expectedResult);
});

test("UpdateTimes returns the same state", () => {
  const state = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
  const action = { type: "SOME_ACTION" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});

test("submitAPI returns true", () => {
  const formData = {
    date: "2022-10-12",
    time: "20:00",
    guests: 5,
    occasion: "Birthday",
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
})
