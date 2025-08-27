import { useEffect } from 'react';

export const Child = () => {
  //throw new Error("Error in Component");
  // Does not work with Error Boundaries
  // catches ony error that are related to the
  // rendering steps of React
  useEffect(() => {
    fetch('/').then(() => {
      throw new Error('Error in Component');
    });
  }, []);
  return <h1>Child Component</h1>;
};
