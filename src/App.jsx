import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import './components/Welcome/Charusat_image';
import Charusat_image from './components/Welcome/Charusat_image';
import StudentLogin from '../src/components/Login/StudentLogin';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
// import Recruiters from './components/Welcome/Recruiters/index'
import Register from './components/Registration/Register';
import Admin from './Admin/admin';
import UserData from './components/UserData/userdata'
import Choice from './components/Registration/Choice'
import companyregister from './components/Registration/Company_Register'
import StudentUpdate from './components/ViewProfile/StudentUpdate'
import StudentPortal from './components/Student Portal/StudentPortal'
import CompanyBasicData from './components/UserData/Companybasicdata'
import CompanyPortal from './components/Company Portal/CompanyPortal'
import CompanyLogin from './components/Login/CompanyLogin'
import Aim from './components/Welcome/Aim/Aim'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Navbar}/>      
      <Route exact path="/" component={Charusat_image}/>
      <Route exact path="/" component={Aim}/>

      {/* <Route exact path="/" component={Major_Recruiters} /> */}
      
     
        <Switch>
          <Route exact path="/login" component={StudentLogin}/>                             
          <Route exact path="/Companylogin" component={CompanyLogin}/>                             
          <Route exact path="/demo" component={Charusat_image}/>
          <Route exact path="/studentregister" component={Register}/>                             
          <Route exact path="/companyregister" component={companyregister}/>                             
          <Route exact path="/admin" component={Admin}/>                             
          <Route exact path="/choice" component={Choice}/>                             
          <Route exact path="/admin/student" component={UserData}/>
          <Route exact path="/admin/company" component={CompanyBasicData}/>
          <Route  path="/student/profile/:id" component={StudentUpdate}/>
          <Route  path="/studentportal/:id" component={StudentPortal} />                              
          <Route exact path="/companyportal/:CUsername" component={CompanyPortal} />                              
        </Switch>          
      </BrowserRouter>
     
    </div>
  );
}

export default App;