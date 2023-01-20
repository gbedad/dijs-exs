import RandomQuote from './Components/RandomQuote'
import './App.css';

function App() {
  const newColor = localStorage.getItem('rand-color')
  return (
    <div style={{ height: "100vh",width:'100vw', display:'flex', justifyCentent:'center', alignItems:'center' }}>
          <RandomQuote  />
    </div>
  );
}

export default App;
