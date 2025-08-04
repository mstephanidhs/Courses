import { SplitScreen } from './components/split-screen';

const LeftSideComp = () => {
  return <h2 style={{ backgroundColor: 'Crimson' }}>I am left!</h2>;
};

const RightSideComp = () => {
  return <h2 style={{ backgroundColor: 'burlywood' }}>I am right!</h2>;
};

function App() {
  return <SplitScreen Left={LeftSideComp} Right={RightSideComp} />;
}

export default App;
