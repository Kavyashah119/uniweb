import React from 'react'
import './Choice.css'
import {BrowserRouter,Link} from 'react-router-dom'

const Choice = () => {
    return (
        <div className="root-container">
            <div>
                <BrowserRouter>
                    <button class="button button2"><Link to="/studentregister">Student</Link></button>
                    <button class="button button2"><Link to="/companyregister">Recruiter</Link></button>
                </BrowserRouter>


            </div>



        </div>
    )
}

export default Choice;
