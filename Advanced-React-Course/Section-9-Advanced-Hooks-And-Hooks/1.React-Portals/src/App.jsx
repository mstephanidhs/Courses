import { useState } from 'react';
import './App.css';
import { createPortal } from 'react-dom';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <div className='alert' onClick={onClose}>
      {children}
    </div>,
    document.getElementById('alert-holder')
  );
};

export default App;
