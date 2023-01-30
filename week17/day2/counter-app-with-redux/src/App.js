import {createStore} from 'redux';
import './App.css';

import {reducer} from './reducers/index'
import {Provider} from 'react-redux';
import Counter from './components/Counter';
const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <header className="App-header">
        <h1>Redux Counter</h1>
        <Counter/>
      </header>
      </Provider>
    </div>
  );
}

export default App;
