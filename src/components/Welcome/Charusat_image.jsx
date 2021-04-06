import React, { Component } from 'react';
import './Charusat_image.css';
import StudentLogin from '../Login/StudentLogin';
import {BrowserRouter,Link} from 'react-router-dom';
import Images from '../Images/charusat.jpg';
import Register from '../Registration/Register';

class Charusat_image extends Component{
    render(){
        return(
            <>
             <div className="container">
                <img src={Images} alt="Charusat Image" width="100%" />
                
                <div className="text-block">
                    <h1>A one stop portal for Placements</h1>
                    <br/>
                    <p> Welcome to the placements portal.</p>                    
                </div>

                <div className="buttons">
                
                    <button className="btns"><Link to="/login">Student</Link></button>

                {/* <button className="btns" onAuxClick={window.location.href="/login"}></button> */}
                
                    <br/><br/><br/><br/>
                    <button className="btns"><Link to="/Companylogin">Recruiter</Link></button>
                </div>

                {/* <Register /> */}
                                
            </div>
            </>
        );
    }   
}
export default Charusat_image;