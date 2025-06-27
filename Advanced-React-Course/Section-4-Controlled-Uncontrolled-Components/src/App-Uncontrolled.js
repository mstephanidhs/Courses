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
      <button onClick={() => goNext({ age: 23 })}>Next</button>
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

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClick={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the modal!!!</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button>

      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert('Yaee, you made it to the final step!');
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
