import { useState } from 'react';
import './App.css';
import Counter from './counter';

// Whenevever the key of an element changes
// React will rebuild/rerender that component
// completely from scratch

// Check every time the counter and its keys so it
// gets the corresponding counter and state of it
// Another way to fix it, is to change the tree e.g.
// {changeShirts ? (
//   <div>
//     <span>Shirts counts: </span> <Counter />{' '}
//   </div>
// ) : (
//   <section>
//     <span>Shoes counts: </span> <Counter />{' '}
//   </section>
// )}

// function App() {
//   const [changeShirts, setChangeShirts] = useState(false);
//   return (
//     <div>
//       {changeShirts ? (
//         <>
//           <span>Shirts counts: </span> <Counter key='shirt' />{' '}
//         </>
//       ) : (
//         <>
//           <span>Shoes counts: </span> <Counter key='shoes' />{' '}
//         </>
//       )}
//       <br />
//       <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
//     </div>
//   );
// }

function App() {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
      {changeShirts ? (
        <>
          <span>Shirts counts: </span>
        </>
      ) : (
        <>
          <span>Shoes counts: </span>
        </>
      )}
      <br />
      <input type='number' key={changeShirts ? 'shorts' : 'shoes'} />
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
    </div>
  );
}

export default App;
