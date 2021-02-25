import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import './components/Welcome/Charusat_image';
import Charusat_image from './components/Welcome/Charusat_image';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Charusat_image />
    </div>
  );
}

export default App;