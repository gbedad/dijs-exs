import RandomQuote from './Components/RandomQuote'
import './App.css';

function App() {
  const newColor = localStorage.getItem('rand-color')
  return (


      <RandomQuote  />

  );
}

export default App;
