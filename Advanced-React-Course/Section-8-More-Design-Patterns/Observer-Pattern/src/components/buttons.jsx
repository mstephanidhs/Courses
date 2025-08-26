import { emitter } from '../App';

const Buttons = () => {
  const onIncrementCounter = () => {
    emitter.emit('increment');
  };

  const onDecrementCounter = () => {
    emitter.emit('decrement');
  };

  return (
    <div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onDecrementCounter}>-</button>
    </div>
  );
};

export default Buttons;
