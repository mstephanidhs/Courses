import { createSlice } from "@reduxjs-toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// preparing a slice of our global state
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  // a map of all the reducers this slice needs
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
