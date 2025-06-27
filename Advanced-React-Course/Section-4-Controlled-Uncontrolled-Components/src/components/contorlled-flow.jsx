export const ControlledFlow = ({ children, onDone, currentIndex, onNext }) => {
  const goNext = (dataFromStep) => {
    onNext(dataFromStep);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};
