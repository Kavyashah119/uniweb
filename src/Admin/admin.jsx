import React, { Component } from 'react';
import './admin.css'
import AdminBackground from '../components/Images/admin_finalbg.png'

function admin() {

    const student = () => {
        window.location.href = "/admin/student";
    }
    const company = () => {
        window.location.href = "/admin/company";
    }

    return (
        <div className="admin-module">
            <img src={AdminBackground} alt="admin background" />
            {/* <div className="buttons">
            <button onClick={student}>Student</button>
            <button onClick={company}>Company</button>
            </div>
             */}

             <div className="student-wrapper">
                 <button className="adminbutton btn1" onClick={student}>Registered Students</button>
                 <button className="adminbutton btn2" onClick={student}>Applied Students</button>
                 <button className="adminbutton btn3" onClick={student}>Selected Students</button>
                 <button className="adminbutton btn4" onClick={company}>Register Requests</button>
                 <button className="adminbutton btn5" onClick={company}>Approved Companies</button>
                 <button className="adminbutton btn6" onClick={company}>Opening Requests</button>
                 <button className="adminbutton btn7" onClick={company}>Approved Openings</button>
                 <button className="adminbutton btn8" onClick={company}>Placed Companies</button>
             </div>
        </div>
    );
}

export default admin;