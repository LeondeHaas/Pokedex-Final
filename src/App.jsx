import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import "./Styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/About">
          <h1>About</h1>
        </Link>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
