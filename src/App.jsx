import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import './components/Welcome/Charusat_image';
import Charusat_image from './components/Welcome/Charusat_image';
import Login from '../src/components/Login/Login';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
// import Recruiters from './components/Welcome/Recruiters/index'
import Major_Recruiters from './components/Welcome/Recruiters/Major_Recruiters';
import Register from './components/Registration/Register';
import Admin from './Admin/admin';
import UserData from './components/UserData/userdata'
import Choice from './components/Registration/Choice'
import companyregister from './components/Registration/Company_Register'
import StudentUpdate from './components/ViewProfile/StudentUpdate'
import StudentPortal from './components/Student Portal/StudentPortal'
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
          <Route exact path="/studentregister" component={Register}/>                             
          <Route exact path="/companyregister" component={companyregister}/>                             
          <Route exact path="/admin" component={Admin}/>                             
          <Route exact path="/choice" component={Choice}/>                             
          <Route exact path="/admin/student" component={UserData}/>
          <Route  path="/student/profile/:id" component={StudentUpdate}/>
          <Route  path="/studentportal/:id" component={StudentPortal} />                              
        </Switch>          
      </BrowserRouter>
     
    </div>
  );
}

export default App;