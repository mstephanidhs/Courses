import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      onClickCapture={() => console.log("outer div")}
      style={{ position: "absolute", marginTop: "200px" }}
    >
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
    <div
      className="alert"
      onClickCapture={() => {
        onClose();
        console.log("inner div");
      }}
    >
      {children}
    </div>,
    document.querySelector("#alert-holder")
  );
};

export default App;
