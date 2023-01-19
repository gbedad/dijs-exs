import RandomQuote from './Components/RandomQuote'
import './App.css';

function App() {
  const newColor = localStorage.getItem('rand-color')
  return (
    <div className="App" style={{backgroundColor: newColor}}>
      <h1>Random Quote Generator</h1>
      <RandomQuote />
    </div>
  );
}

export default App;
