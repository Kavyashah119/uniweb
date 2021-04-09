import React, { Component } from 'react';
import './admin.css'
import AdminBackground from '../components/Images/admin.jpg'

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
            <div className="buttons">
            <button onClick={student}>Student</button>
            <button onClick={company}>Company</button>
            </div>
            
        </div>

    );
}

export default admin;