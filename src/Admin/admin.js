import React, { Component } from 'react';
import './admin.css'

function admin() {

    const student = () => {
        window.location.href = "/admin/student";
    }
    const company = () => {
        window.location.href = "/admin/company";
    }

    return (
        <div className="admin-module">
         <p className="admin">Hello Admin!</p>
                <button className="student" onClick={student}>Student</button>
                <button className="company" onClick={company}>Company</button> 
        </div>      
            
    );
}

export default admin;