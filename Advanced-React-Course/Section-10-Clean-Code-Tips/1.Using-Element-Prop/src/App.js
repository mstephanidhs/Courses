import Button from './components/button';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
};

function App() {
  return (
    <div style={style}>
      <Button size='s'>Small</Button>
      <Button size='m'>Medium</Button>
      <Button size='l'>Large</Button>
      <Button size='xl'>xLarge</Button>
      <Button As='a' href='/'>
        Link
      </Button>
    </div>
  );
}

export default App;
