import * as React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import PostList from './PostList';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

function App() {
  const HomeScreen = () => (
    <div>
      <h1>Home</h1>
      <PostList />
    </div>
  );

  const ProfileScreen = () => (
    <div>
      <h1>Profile Screen</h1>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
  );

  const ShopScreen = () => {
    throw Error('Problem');
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      
    },
    mode: 'no-cors',
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27,
    }),
  };
  async function fetchData () {
    const response = await fetch(
      'https://webhook.site/63300e53-b500-465a-b6b4-8fa4ccb2b081',
      requestOptions
    );
    
    console.log(response);
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={fetchData}>Fetch data from webhook</button>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
