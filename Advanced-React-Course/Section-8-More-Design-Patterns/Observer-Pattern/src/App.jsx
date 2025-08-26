import mitt from 'mitt';
import ParentComponent from './components/parent';

export const emitter = mitt();

function App() {
  return <ParentComponent />;
}

export default App;
