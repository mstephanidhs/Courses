import { useEffect, useState } from 'react';
import { emitter } from '../App';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncrement = () => {
      setCount((count) => count + 1);
    };
    const onDecrement = () => {
      setCount((count) => count - 1);
    };

    emitter.on('increment', onIncrement);
    emitter.on('decrement', onDecrement);

    return () => {
      emitter.off('increment', onIncrement);
      emitter.off('decrement', onDecrement);
    };
  }, []);

  return <div>#: {count}</div>;
};

export default Counter;
