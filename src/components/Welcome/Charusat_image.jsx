import React, { Component } from 'react';
import './Charusat_image.css';
import StudentLogin from '../Login/StudentLogin';
import { BrowserRouter, Link } from 'react-router-dom';
import Images from '../Images/charusat.jpg';
import Register from '../Registration/Register';

class Charusat_image extends Component {
    render() {
        return (
            <>
                <div className="container1">
                    <img src={Images} alt="Charusat Image" width="100%" />

                    <div className="text-block">
                        <h1>A one stop portal for Placements</h1>
                        <br />
                        <p> Welcome to the placements portal.</p>
                    </div>

                    <div className="buttons1">

                        <button className="btns1"><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Student</Link></button>

                        <br /><br /><br /><br />
                        <button className="btns1"><Link to="/Companylogin" style={{ textDecoration: "none", color: "white" }}>Recruiter</Link></button>
                    </div>

                    {/* <Register /> */}

                </div>
            </>
        );
    }
}
export default Charusat_image;