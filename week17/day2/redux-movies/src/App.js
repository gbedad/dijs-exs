import MovieList from './components/MovieList';
import './App.css';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">

        <h1>Redux Movies</h1>
        <div className='App-header'>
          <MovieList />
          <MovieDetails />
        </div>
    </div>
  );
}

export default App;
