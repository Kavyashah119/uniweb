import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import './components/Welcome/Charusat_image';
import Charusat_image from './components/Welcome/Charusat_image';
import Login from '../src/components/Login/Login';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
// import Recruiters from './components/Welcome/Recruiters/index'
import Major_Recruiters from './components/Welcome/Recruiters/Major_Recruiters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Navbar}/>      
      <Route exact path="/" component={Charusat_image}/>
      <Route exact path="/" component={Major_Recruiters} />
     
     
        <Switch>
          <Route exact path="/login" component={Login}/>                             
          <Route exact path="/demo" component={Charusat_image}/>                             
        </Switch>          
      </BrowserRouter>
     
    </div>
  );
}

export default App;