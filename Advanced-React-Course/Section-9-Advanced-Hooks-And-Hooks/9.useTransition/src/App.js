import { useState, useTransition } from 'react';
import Cover from './components/cover';
import Reviews from './components/reviews';
import Writer from './components/writer';
import { StyledButton } from './components/styled-elements';

function App() {
  const [section, setSection] = useState('Cover');
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec) => {
    startTransition(() => {
      // specifically state updates
      // flags to react as a non imediate update
      // it's a sync call
      // needs to be called directly inside the
      // startTransition
      setSection(sec);
    });
  };

  return (
    <>
      <StyledButton onClick={() => sectionHandler('Cover')}>
        Book Cover
      </StyledButton>
      <StyledButton onClick={() => sectionHandler('Reviews')}>
        Book Reviews
      </StyledButton>
      <StyledButton onClick={() => sectionHandler('Writer')}>
        Book's Writer
      </StyledButton>

      {isPending && 'Loading...'}

      {section === 'Cover' ? (
        <Cover />
      ) : section === 'Reviews' ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

export default App;
