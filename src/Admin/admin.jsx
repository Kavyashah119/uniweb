import React, { Component } from 'react';
import './admin.css'
import AdminBackground from '../components/Images/admin_finalbg.png'

function admin() {

    const RegisteredStudent = () => {
        window.location.href = "/admin/RegisteredStudent";
    }
    const AppliedStudent = () => {
        window.location.href = "/admin/RegisteredStudent";
    }
    const SelectedStudent = () => {
        window.location.href = "/admin/RegisteredStudent";
    }
    const RegisteredCompanyRequest = () => {
        window.location.href = "/admin/RegisteredCompany";
    }
    const ApprovedCompany = () => {
        window.location.href = "/admin/ApprovedCompany";
    }
    const CompanyOpeningRequest = () => {
        window.location.href = "/admin/OpeningRequest";
    }
    const CompanyRequestApproved = () => {
        window.location.href = "/admin/ApprovedOpening";
    }
    const PlacedCompany = () => {
        window.location.href = "/admin/RegisteredCompany";
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
                 <button className="adminbutton btn1" onClick={RegisteredStudent}>Registered Students</button>
                 <button className="adminbutton btn2" onClick={AppliedStudent}>Applied Students</button>
                 <button className="adminbutton btn3" onClick={SelectedStudent}>Selected Students</button>
                 <button className="adminbutton btn4" onClick={RegisteredCompanyRequest}>Register Requests</button>
                 <button className="adminbutton btn5" onClick={ApprovedCompany}>Approved Companies</button>
                 <button className="adminbutton btn6" onClick={CompanyOpeningRequest}>Opening Requests</button>
                 <button className="adminbutton btn7" onClick={CompanyRequestApproved}>Approved Openings</button>
                 <button className="adminbutton btn8" onClick={PlacedCompany}>Placed Companies</button>
             </div>
        </div>
    );
}

export default admin;