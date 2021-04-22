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
import RegisteredStudent from './components/UserData/RegisteredStudents'
import Choice from './components/Registration/Choice'
import companyregister from './components/Registration/Company_Register'
import StudentUpdate from './components/ViewProfile/StudentUpdate'
import StudentPortal from './components/Student Portal/StudentPortal'
import CompanyBasicData from './components/UserData/Companybasicdata'
import CompanyPortal from './components/Company Portal/CompanyPortal'
import CompanyLogin from './components/Login/CompanyLogin'
import Aim from './components/Welcome/Aim/Aim'
import CompanyAddPost from './components/Company Portal/CompanyAddPost/CompanyAddPost'
import ApprovedCompany from './components/UserData/ApprovedCompany'
import OpeningRequest from './components/UserData/OpeningRequest'
import ApprovedOpening from './components/UserData/ApprovedOpening'
import StudentsApplications from './components/UserData/StudentsApplications'
import StudentAppliedCompany from './components/UserData/StudentAppliedCompany'
import PlacedStudents from './components/UserData/PlacedStudents'
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
          <Route exact path="/admin/RegisteredStudent" component={RegisteredStudent}/>
          <Route exact path="/admin/RegisteredCompany" component={CompanyBasicData}/>
          <Route exact path="/admin/ApprovedCompany" component={ApprovedCompany}/>
          <Route exact path="/admin/OpeningRequest" component={OpeningRequest}/>
          <Route exact path="/admin/ApprovedOpening" component={ApprovedOpening}/>
          <Route exact path="/admin/PlacedCompany" component={PlacedStudents}/>
          <Route exact path="/admin/SelectedStudents" component={PlacedStudents}/>
          <Route  path="/student/profile/:id" component={StudentUpdate}/>
          <Route exact path="/studentportal/:id" component={StudentPortal} />                              
          <Route exact path="/studentportal/:id/AppliedCompanies" component={StudentAppliedCompany} />                              
          <Route exact path="/companyportal/:CUsername" component={CompanyPortal} />  
          <Route exact path="/companyportal/:CUsername/:CJobProfile" component={StudentsApplications} />  
          <Route exact path="/companyaddpost/:CUsername" component={CompanyAddPost} />                          
        </Switch>          
      </BrowserRouter>
     
    </div>
  );
}

export default App;