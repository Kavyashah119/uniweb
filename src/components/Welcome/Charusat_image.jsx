import React, { Component } from 'react';
import './Charusat_image.css';

class Charusat_image extends Component{
    render(){
        return(
            <>
             <div className="container">
                <img src="https://www.fresherslive.com/assets-images/education/origin/2020/07/15/charusat-result.jpg" alt="Charusat Image" width="100%" />
                
                <div className="text-block">
                    <h1>A one stop portal for Placements</h1>
                    <br/>
                    <p> Welcome to the placements portal.</p>                    
                </div>

                <div className="buttons">
                    <button className="btns" onClick="https://www.google.com" >Student</button>
                    <br/><br/><br/><br/>
                    <button className="btns" onClick="https://www.youtube.com">Recruiter</button>
                </div>
                                
            </div>
            </>
        );
    }   
}
export default Charusat_image;