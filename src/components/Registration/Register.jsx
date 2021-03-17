import React, { useState } from 'react'
import './Register.css'
import { Multiselect } from 'multiselect-react-dropdown'

const Register = () => {

    const data = [
        { Domain: 'Deep Learning', id: 1 },
        { Domain: 'Machine Learning', id: 2 },
        { Domain: 'Artificial Intelligence', id: 1 },
        { Domain: 'Data Security', id: 1 },
        { Domain: 'Robotics', id: 1 },
    ]

    const [options] = useState(data);

    const places = [
        { City: 'Ahmedabad', id: 1 },
        { City: 'Vadodara', id: 2 },
        { City: 'Rajkot', id: 1 },
        { City: 'Surat', id: 1 },
        { City: 'Mumbai', id: 1 },

    ]

    const [locations] = useState(places);

    return (

        <div className="root-container">
            <div className="inner-container">

                <section className="header">
                    <h4>Student - Registration</h4>
                </section>

                <div className="box">
                    <div className="split right">
                        <div className="personalinfo">
                            <br />

                            <h3>Personal info</h3><hr />

                            <div className="input-group">
                                <label htmlFor="name" style={{ marginRight: "68px" }}>Name</label>
                                <input type="text" name="firstname" placeholder="First Name" className="inputbox" size="40" required />
                                <input type="text" name="middlename" placeholder="Middle Name" className="inputbox" size="40" required />
                                <input type="text" name="lastname" placeholder="Last Name" className="inputbox" size="40" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="dob" style={{ marginRight: "22px" }}>Date-of-Birth</label>
                                <input type="date" name="dob" placeholder="Date of Birth" className="inputbox" size="40" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="personal-email">Personal e-mail</label>
                                <input type="email" name="personal-email" placeholder="Personal Email" className="inputbox" size="40" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="mobileno" style={{ marginRight: "5px" }}>Mobile Number</label>
                                <input type="tel" name="mobileno" placeholder="Mobile Number" className="inputbox" size="40" pattern="[0-9]{10}" maxLength="10" required />
                            </div>

                            <div className="input-group" >
                                <label htmlFor="address" style={{ marginRight: "55px", verticalAlign: "top" }}>Address</label>
                                <textarea name="address" placeholder="Address" className="inputbox" rows="5" cols="100" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="pincode" style={{ marginRight: "55px" }}>Pincode</label>
                                <input type="text" placeholder="Pincode" className="inputbox" maxLength="6" required />
                            </div>
                            <br /><br />

                        </div>

                        <div className="academicinfo">
                            <h3>Academic info</h3><hr />

                            <div className="input-group">
                                <label htmlFor="id" style={{ marginRight: "72px" }}>Id no.</label>
                                <input type="text" name="id" placeholder="ID" className="inputbox" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="college-email">Charusat e-mail</label>
                                <input type="email" name="college-email" placeholder="Charusat Email" className="inputbox" size="40" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="sgpa" style={{ marginRight: "70px" }} >SGPA</label>
                                {/* <select id="select1" name="select1" className="inputbox">
                                    <option value=""></option>
                                    <option value="Semester 1">Semester 1</option>
                                    <option value="Semester 2">Semester 2</option>
                                    <option value="Semester 3">Semester 3</option>
                                    <option value="Semester 4">Semester 4</option>
                                    <option value="Semester 5">Semester 5</option>
                                    <option value="Semester 6">Semester 6</option>
                                    <option value="Semester 7">Semester 7</option>
                                    <option value="Semester 8">Semester 8</option>
                                </select> */}
                                <input type="number" name="sgpa" placeholder="Semester-1" step="0.001" min="0" max="10" className="inputbox" required />
                                <input type="number" name="sgpa" placeholder="Semester-2" step="0.001" min="0" max="10" className="inputbox" required />
                                <input type="number" name="sgpa" placeholder="Semester-3" step="0.001" min="0" max="10" className="inputbox" required />
                                <input type="number" name="sgpa" placeholder="Semester-4" step="0.001" min="0" max="10" className="inputbox" required /><br />
                                <input type="number" name="sgpa" placeholder="Semester-5" step="0.001" min="0" max="10" className="inputbox" required style={{ marginLeft: "120px" }} />
                                <input type="number" name="sgpa" placeholder="Semester-6" step="0.001" min="0" max="10" className="inputbox" required />
                                <input type="number" name="sgpa" placeholder="Semester-7" step="0.001" min="0" max="10" className="inputbox" required />
                                <input type="number" name="sgpa" placeholder="Semester-8" step="0.001" min="0" max="10" className="inputbox" required />

                            </div>

                            <div className="input-group">
                                <label htmlFor="cgpa" style={{ marginRight: "70px" }} >CGPA</label>
                                <input type="float" placeholder="Overall CGPA" className="inputbox" required />
                            </div>

                            <div className="multi-group" >
                                <label htmlFor="domain" style={{ marginRight: "70px" }}>Domain</label>
                                <Multiselect options={options} displayValue="Domain" className="inputbox" />
                            </div>

                            <div className="input-group">
                                <label htmlFor="achievements" style={{ marginRight: "15px", verticalAlign: "top" }} > Achievements</label>
                                <textarea name="achievements" placeholder="Other Achievements" className="inputbox" rows="5" cols="100" />
                            </div>

                            <div className="multi-group">
                                <label htmlFor="location" style={{ marginRight: "25px" }}>Preferred Location</label>
                                <Multiselect options={locations} displayValue="City" className="inputbox" />
                            </div>

                            <div className="input-group">
                                <label htmlFor="certificates" style={{ marginRight: "15px" }}>Certifications</label>
                                <input type="file" id="myFile" className="inputbox" name="filename" multiple />
                            </div>

                            <div className="input-group">
                                <label htmlFor="resume" style={{ marginRight: "50px" }}>Resume</label>
                                <input type="file" id="myFile" className="inputbox" name="filename" required />
                            </div>

                        </div>

                        <input type="submit" value="Submit" />

                        <footer>
                            <p>Copyright @ 2021, Inc. All Rights Reserved</p>
                        </footer>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
