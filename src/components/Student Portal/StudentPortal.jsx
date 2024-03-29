import React, { useEffect } from 'react'
import './StudentPortal.css';
import Charusat_image from '../Welcome/Charusat_image'
import ApprovedOpeningStudent from '../UserData/ApprovedOpeningStudent'

const StudentPortal = (props) => {

    var UserID

    useEffect(()=>{
         UserID = props.match.params.id;
        console.log(UserID)
    })

    function myFunction() {

        if (window.confirm("Are you sure you want to sign out?")) {
            sessionStorage.removeItem("IsLogin")
            sessionStorage.removeItem("IsStudent")
            sessionStorage.removeItem("IsCompany")
            sessionStorage.removeItem("ID")
            let temp = localStorage.getItem("ID");
            if(temp!=null){
                localStorage.removeItem("ID")
                localStorage.removeItem("Password")
            }
            window.location.href ="/";
        }
        else { }

    }
    UserID=props.match.params.id
    console.log(UserID)
    var Link = `/student/profile/${UserID}`
    var link =`/studentportal/${UserID}/AppliedCompanies`
    return (
        <>

            <div className="outer-container">
                <nav className="navbar">
                    <div className="dropdown">
                        <button className="dropbtn" id="buttonHeader">{UserID}<i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="">Dashboard</a>
                            <a href={Link} id="link">Edit profile</a>
                            <a onClick={myFunction}> Sign-out </a>
                        </div>
                    </div>
                    <a href={link}>Status</a>
                    <a href="#home">Home</a>
                    <a href="" className="heading">University Placements</a>
                </nav>
                <ApprovedOpeningStudent id={UserID}/>
            </div>

        </>
    )
}

export default StudentPortal;
