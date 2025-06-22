import { useState } from 'react';
import { ControlledForm } from './components/controlled-form';
import { ControlledModal } from './components/controlled-modal';
import { UncontrolledForm } from './components/uncontrolled-form';
import { UncontrolledFlow } from './components/uncontrolled-flow';

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name:</h1>
      <button onClick={() => goNext({ name: 'MyName' })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age:</h1>
      <button onClick={() => goNext({ age: 26 })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3: Enter your country:</h1>
      <button onClick={() => goNext({ country: 'Mars' })}>Next</button>
    </>
  );
};
const StepFourth = ({ goNext }) => {
  return (
    <>
      <h1>Congratulations! You qualify for the gift!</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [data, setData] = useState({});

  const onNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <>
      <UncontrolledFlow currentIndex={currentStepIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFourth />
      </UncontrolledFlow>
    </>
  );
}

export default App;
