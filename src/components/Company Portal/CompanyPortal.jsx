import React, { useEffect } from 'react'
import './CompanyPortal.css';
import Charusat_image from '../Welcome/Charusat_image'

const CompanyPortal = (props) => {

    var CUsername

    useEffect(() => {
        CUsername = props.match.params.CUsername;
        console.log(CUsername)
    })

    function myFunction() {

        if (window.confirm("Are you sure you want to sign out?")) {
            window.location.href = "/";
        }
        else { }

    }
    CUsername = props.match.params.CUsername
    console.log(CUsername)
    // var Link = `/student/profile/${UserID}`
    return (
        <>

            <div className="outer-container">
                <nav className="navbar">
                    <div className="dropdown">
                        <button className="dropbtn" id="buttonHeader">{CUsername}<i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="">Dashboard</a>
                            <a href="" id="link">Edit profile</a>
                            <a onClick={myFunction}> Sign-out </a>
                        </div>
                    </div>
                    <a href="#news">News</a>
                    <a href="#home">Home</a>
                    <a href="" className="heading">University Placements</a>
                </nav>

                <div>
                    <button className="btn" onClick={window.location.href="/companyaddpost"} >Add Post</button>
                </div>

            </div>

        </>
    )
}

export default CompanyPortal;
