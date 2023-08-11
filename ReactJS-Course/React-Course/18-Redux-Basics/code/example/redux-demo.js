const redux = require("redux");

// reducer function (2 params: old state + dispatched action, return a new state object), SHOULD BE A PURE FUNCTION (same input leads to same output)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "incremet") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// which reducer is responsible for changing the data
const store = redux.createStore(counterReducer);

// components that gets the data from the store
const counterSubscriber = () => {
  // getState: latest state snapshot after it is updated
  const latestState = store.getState();
  console.log(latestState);
};

// component subscribes to the store
store.subscribe(counterSubscriber);

// dispatch an action, so the reducer function is called
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
