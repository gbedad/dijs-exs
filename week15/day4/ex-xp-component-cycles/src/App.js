import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color'

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <div className="App">
      <header>
      <h2>Exercise 1</h2>
      <Car carInfo={carinfo.model}/>
      </header>
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
