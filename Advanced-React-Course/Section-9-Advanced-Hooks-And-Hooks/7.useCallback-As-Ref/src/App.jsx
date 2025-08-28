import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [showInput, setShowInput] = useState(false);
  const realInputRef = useRef();
  const inputRef = useCallback((input) => {
    realInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  return (
    <>
      <button onClick={() => setShowInput((s) => !s)}>Switch</button>
      <input type='text' ref={inputRef} />
    </>
  );
}

export default App;
