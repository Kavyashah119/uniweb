import React, { Component } from 'react';
import './Charusat_image.css';
import Login from '../Login/Login';
import {BrowserRouter,Link} from 'react-router-dom';
import Images from '../Images/charusat.jpg';

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
                <BrowserRouter>
                    <button className="btns"><Link to="/login">Student</Link></button>
                </BrowserRouter>
                    <br/><br/><br/><br/>
                    <button className="btns"><Link to="/login">Recruiter</Link></button>
                </div>
                                
            </div>
            </>
        );
    }   
}
export default Charusat_image;