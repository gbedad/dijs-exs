import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise4 from './Exercise4'
import './App.css';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
const myelement = <h1>I love JSX!</h1>
const sum = 5 + 5
  return (
    <div className="App">
      <header>
      <h1>Hello World!</h1>
      {myelement}
      <p>React is {sum} times better with JSX!</p>
      </header>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favAnimals}/>
      <Exercise4 />
    </div>
  );
}

export default App;
