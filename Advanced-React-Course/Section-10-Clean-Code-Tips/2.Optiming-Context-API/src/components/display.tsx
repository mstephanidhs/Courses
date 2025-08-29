import { useCartContext } from "../App";

const Display = () => {
  const {
    state: { count },
  } = useCartContext();
  return <span className="span">{count}</span>;
};

export default Display;
