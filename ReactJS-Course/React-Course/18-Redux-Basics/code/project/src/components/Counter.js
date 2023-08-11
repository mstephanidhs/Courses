import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  // extract the piece of data that want to use in this component, a subscription will be set automatically, the component will be updated whenever the variable counter is changed
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // will be created: {type: UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
