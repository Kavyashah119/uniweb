import React, { useState,useEffect } from 'react';
import './CompanyAddPost.css'
import Axios from 'axios'

const CompanyAddPost = (props) => {
    
    var CUsername

    const [name,setName]=useState('');
    const [jobProfile,setJobProfile]=useState('');
    const [noOfOpenings,setnoOfOpenings]=useState(0);
    const [skills,setSkills]=useState('');
    const [experience,setExperience]=useState('');
    const [DOE,setDOE]=useState('');
    const [dueDate,setDueDate]=useState('');

    useEffect(()=>{
      CUsername = props.match.params.CUsername

        setName(CUsername)
    })

    const CompanyOpeningRegisterData = () =>{
        Axios.post("http://localhost:3001/CompanyOpeningData",{
            name : name,
            jobProfile : jobProfile,
            noOfOpenings : noOfOpenings,
            skills : skills,
            experience : experience,
            DOE : DOE,
            dueDate : dueDate
        }).then((response)=>{
            window.location.href="/companyportal/" + `${name}`

        })
    }

    // setName(CUsername)

    return (
        <div className="wrapper">

            <section className="header">
                <h4>Post Details</h4>
            </section>

            <div className="innerwrapper">

                <div className="input-group">
                    <label htmlFor="Company name" style={{marginRight:"20px"}}>Company Name</label>
                    <input type="text" name="cname" placeholder="Company Name" value={name} disabled={true} className="inputbox" size="40" />
                </div>

                <div className="input-group">
                    <label htmlFor="jobprofile" style={{marginRight:"55px"}}>Job profile</label>
                    <select name="jobprofile" id="jobprofile" className="inputbox" onChange={(event) =>{
                                    setJobProfile(event.target.value);
                                }}>
                        <option value="web">Web Developer</option>
                        <option value="android">Android Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                        <option value="flutter">Flutter Developer</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="openings" style={{marginRight:"20px"}}>No. of openings</label>
                    <input type="text" name="openings" placeholder="No. of openings" className="inputbox" size="40" onChange={(event) =>{
                                    setnoOfOpenings(event.target.value);
                                }} />
                </div>

                <div className="input-group">
                    <label htmlFor="skills" style={{marginRight:"25px"}}>Skills Required</label>
                    <input type="text" name="skills" placeholder="Skills required" className="inputbox" size="40"onChange={(event) =>{
                                    setSkills(event.target.value);
                                }} />
                </div>

                <div className="input-group">
                    <label htmlFor="experience" style={{marginRight:"25px"}}>Experience Required</label>
                    <input type="text" name="experience" placeholder="Experience required" className="inputbox" size="40"onChange={(event) =>{
                                    setExperience(event.target.value);
                                }} />
                </div>

                <div className="input-group">
                    <label htmlFor="examdate" style={{marginRight:"40px"}}>Date of exam</label>
                    <input type="date" name="examdate" placeholder="Date of exam" className="inputbox" size="40"onChange={(event) =>{
                                    setDOE(event.target.value);
                                }} />
                </div>

                <div className="input-group">
                    <label htmlFor="duedate" style={{marginRight:"70px"}}>Due date</label>
                    <input type="date" name="duedate" placeholder="Due date for application" className="inputbox" size="40" onChange={(event) =>{
                                    setDueDate(event.target.value);
                                }}/>
                </div>

                <div className="input-group">
                    <label htmlFor="jd" style={{marginTop:"20px",marginRight:"0px"}}>Job Description</label>
                    <input type="file" name="jd" />
                </div>

                <input type="submit" value="Submit" onClick={CompanyOpeningRegisterData} />

            </div>
        </div>
    )
}

export default CompanyAddPost
