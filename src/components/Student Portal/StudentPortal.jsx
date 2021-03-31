import React from 'react'
import './StudentPortal.css';
import Charusat_image from '../Welcome/Charusat_image'

const StudentPortal = () => {

    function myFunction() {

        if (window.confirm("Are you sure you want to sign out?")) {
            window.location.href = <Charusat_image />;
        }
        else { }

    }

    return (
        <>

            <div className="outer-container">
                <nav className="navbar">

                    <div className="dropdown">
                        <button className="dropbtn">19IT131 <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="">Dashboard</a>
                            <a href="">Edit profile</a>
                            <a onClick={myFunction}> Sign-out </a>
                        </div>
                    </div>
                    <a href="#news">News</a>
                    <a href="#home">Home</a>
                    <a href="" className="heading">University Placements</a>
                </nav>

            </div>

        </>
    )
}

export default StudentPortal;
