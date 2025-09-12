import { useStateContext } from './cart-context';

const Display = () => {
  const { count } = useStateContext();
  return <span className='span'>{count}</span>;
};

export default Display;
