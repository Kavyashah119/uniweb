import React, { useState } from 'react'
import '../Registration/Register.css'
import { Multiselect } from 'multiselect-react-dropdown'
import { Button } from '../Navbar/Button';
import Axios from 'axios'

const StudentUpdate = () => {

    const [firstName,setFirstName]=useState('');
    const [middleName,setMiddleName]=useState('');
    const [lastName,setLastName]=useState('');
    const [dob,setDob]=useState('');
    const [personalEmail,setPersonalEmail]=useState('');
    const [MobileNumber,setMobileNumber]=useState(0);
    const [address,setAddress]=useState('');
    const [pincode,setPincode]=useState(0);

    const [ID,setID]=useState('');
    const [branch,setBranch]=useState('');
    const [charusatEmail,setCharusatEmail]=useState('');
    const [SGPA1,setSGPA1]=useState('');
    const [SGPA2,setSGPA2]=useState('');
    const [SGPA3,setSGPA3]=useState('');
    const [SGPA4,setSGPA4]=useState('');
    const [SGPA5,setSGPA5]=useState('');
    const [SGPA6,setSGPA6]=useState('');
    const [SGPA7,setSGPA7]=useState('');
    const [SGPA8,setSGPA8]=useState('');
    const [CGPA,setCGPA]=useState('');
    const [domain,setDomain]=useState('');
    const [achievements,setAchievements]=useState('');
    const [location,setLocation]=useState('');

    const RegisterData = (props) =>{
        Axios.post("http://localhost:3001/studentRegister",{
            firstName : firstName,
            middleName : middleName,
            lastName : lastName,
            dob : dob,
            personalEmail : personalEmail,
            MobileNumber : MobileNumber,
            address : address,
            pincode : pincode,
            ID : ID,
            branch : branch,
            charusatEmail : charusatEmail,
            SGPA1 : SGPA1,
            SGPA2 : SGPA2,
            SGPA3 : SGPA3,
            SGPA4 : SGPA4,
            SGPA5 : SGPA5,
            SGPA6 : SGPA6,
            SGPA7 : SGPA7,
            SGPA8 : SGPA8,
            CGPA : CGPA,
            domain : domain,
            achievements : achievements,
            PLocation : PLocation

        }).then((response) =>{
            window.location.href = '/admin';
            console.log("Response Received");
        });
    }

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

    var [PLocation,getPLocation] = useState('');
    var SLocation = (e) =>{
        getPLocation = (Array.isArray(e)?e.map(x=>x.City):[]);
    }

    return (

        <div className="root-container">
            <div className="inner-container">

                <section className="header">
                    <h4>Student - Profile</h4>
                </section>

                <div className="box">
                    <div className="split right">
                        <div className="personalinfo">
                            <br />

                            <h3>Personal info</h3><hr />

                            <div className="input-group">
                                <label htmlFor="name" style={{ marginRight: "68px" }}>Name</label>
                                <input type="text" name="firstname" placeholder="First Name" className="inputbox" size="40" onChange={(event) =>{
                                    setFirstName(event.target.value);
                                }} required />
                                <input type="text" name="middlename" placeholder="Middle Name" className="inputbox" size="40"onChange={(event) =>{
                                    setMiddleName(event.target.value);
                                }} required />
                                <input type="text" name="lastname" placeholder="Last Name" className="inputbox" size="40"onChange={(event) =>{
                                    setLastName(event.target.value);
                                }} required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="dob" style={{ marginRight: "22px" }}>Date-of-Birth</label>
                                <input type="date" name="dob" placeholder="Date of Birth" className="inputbox" size="40"onChange={(event) =>{
                                    setDob(event.target.value);
                                }} required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="personal-email">Personal e-mail</label>
                                <input type="email" name="personal-email" placeholder="Personal Email" className="inputbox" size="40"onChange={(event) =>{
                                    setPersonalEmail(event.target.value);
                                }} required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="mobileno" style={{ marginRight: "5px" }}>Mobile Number</label>
                                <input type="tel" name="mobileno" placeholder="Mobile Number" className="inputbox" size="40" pattern="[0-9]{10}" maxLength="10"onChange={(event) =>{
                                    setMobileNumber(event.target.value);
                                }} required />
                            </div>

                            <div className="input-group" >
                                <label htmlFor="address" style={{ marginRight: "55px", verticalAlign: "top" }}>Address</label>
                                <textarea name="address" placeholder="Address" className="inputbox" rows="5" cols="100"onChange={(event) =>{
                                    setAddress(event.target.value);
                                }} required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="pincode" style={{ marginRight: "55px" }}>Pincode</label>
                                <input type="text" placeholder="Pincode" className="inputbox" maxLength="6"onChange={(event) =>{
                                    setPincode(event.target.value);
                                }} required />
                            </div>
                            <br /><br />

                        </div>

                        <div className="academicinfo">
                            <h3>Academic info</h3><hr />

                            <div className="input-group">
                                <label htmlFor="id" style={{ marginRight: "72px" }}>ID No.</label>
                                <input type="text" name="id" placeholder="ID" className="inputbox"onChange={(event) =>{
                                    setID(event.target.value);
                                }} required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="branch" style={{ marginRight: "65px" ,borderWidth:"10px"}}>Branch</label>
                                <select id="branch" name="branch" className="inputbox"onChange={(event) =>{
                                    setBranch(event.target.value);
                                }}>
                                    {/* <option value=""></option> */}
                                    <option value="IT">IT</option>
                                    <option value="CE">CE</option>
                                    <option value="CSE">CSE</option>
                                    <option value="Civil">Civil</option>
                                    <option value="EC">EC</option>
                                    <option value="IC">IC</option>
                                    <option value="Mechanical">Mechanical</option>
                                </select>
                                {/* <input type="text" name="branch" placeholder="ID" className="inputbox" required /> */}
                            </div>

                            <div className="input-group">
                                <label htmlFor="college-email">Charusat e-mail</label>
                                <input type="email" name="college-email" placeholder="Charusat Email" className="inputbox" size="40"onChange={(event) =>{
                                    setCharusatEmail(event.target.value);
                                }} required />
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
                                <input type="number" name="sgpa" placeholder="Semester-1" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA1(event.target.value);
                                }} required />
                                <input type="number" name="sgpa" placeholder="Semester-2" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA2(event.target.value);
                                }} required />
                                <input type="number" name="sgpa" placeholder="Semester-3" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA3(event.target.value);
                                }} required />
                                <input type="number" name="sgpa" placeholder="Semester-4" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA4(event.target.value);
                                }} required /><br />
                                <input type="number" name="sgpa" placeholder="Semester-5" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA5(event.target.value);
                                }} required style={{ marginLeft: "120px" }} />
                                <input type="number" name="sgpa" placeholder="Semester-6" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA6(event.target.value);
                                }} required />
                                <input type="number" name="sgpa" placeholder="Semester-7" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA7(event.target.value);
                                }} required />
                                <input type="number" name="sgpa" placeholder="Semester-8" step="0.001" min="0" max="10" className="inputbox"onChange={(event) =>{
                                    setSGPA8(event.target.value);
                                }} required />

                            </div>

                            <div className="input-group">
                                <label htmlFor="cgpa" style={{ marginRight: "70px" }} >CGPA</label>
                                <input type="float" placeholder="Overall CGPA" className="inputbox"onChange={(event) =>{
                                    setCGPA(event.target.value);
                                }} required />
                            </div>

                            <div className="multi-group" >
                                <label htmlFor="domain" style={{ marginRight: "70px" }}>Domain</label>
                                <Multiselect options={options} displayValue="Domain" className="inputbox"onChange={(event) =>{
                                    setDomain(event.target.value);
                                }} />
                            </div>

                            <div className="input-group">
                                <label htmlFor="achievements" style={{ marginRight: "15px", verticalAlign: "top" }} > Achievements</label>
                                <textarea name="achievements" placeholder="Other Achievements" className="inputbox" rows="5" cols="100"onChange={(event) =>{
                                    setAchievements(event.target.value);
                                }} />
                            </div>

                            <div className="multi-group">
                                <label htmlFor="location" style={{ marginRight: "25px" }}>Preferred Location</label>
                                <Multiselect options={locations} displayValue="City" className="inputbox"onChange={(event) =>{
                                    SLocation(event.target.value);
                                }} />
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

                        {/* <input type="submit" value="Submit" /> */}
                        <Button onClick={RegisterData}>Update</Button>

                        <footer>
                            <p>Copyright @ 2021, Inc. All Rights Reserved</p>
                        </footer>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentUpdate;
