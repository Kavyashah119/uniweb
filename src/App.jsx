import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import './components/Welcome/Charusat_image';
import Charusat_image from './components/Welcome/Charusat_image';
import Login from '../src/components/Login/Login';
import {BrowserRouter , Route , Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Navbar}/>      
      <Route exact path="/" component={Charusat_image}/>
      
        <Switch>
          <Route exact path="/Login" component={Login}/>                    
        </Switch>          
      </BrowserRouter>
     
    </div>
  );
}

export default App;