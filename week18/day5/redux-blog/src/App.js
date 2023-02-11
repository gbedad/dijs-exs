import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

const App = () => {
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact={true} path="/" element={<Home/>} />
          <Route path="/:postId" element={<Post />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
