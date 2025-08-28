import { useDeferredValue, useState } from 'react';
import { HeavyComponent } from './components/heavy-component';

function App() {
  const [keyword, setKeyword] = useState('');

  const deferredKeyword = useDeferredValue(keyword);
  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HeavyComponent keyword={deferredKeyword} />
    </>
  );
}

export default App;
