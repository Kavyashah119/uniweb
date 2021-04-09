import React from 'react'
import './CompanyAddPost.css'

const CompanyAddPost = () => {

    return (
        <div className="wrapper">

            <section className="header">
                <h4>Post Details</h4>
            </section>

            <div className="innerwrapper">

                <div className="input-group">
                    <label htmlFor="Company name" style={{marginRight:"20px"}}>Company Name</label>
                    <input type="text" name="cname" placeholder="Company Name" className="inputbox" size="40" />
                </div>

                <div className="input-group">
                    <label htmlFor="jobprofile" style={{marginRight:"55px"}}>Job profile</label>
                    <select name="jobprofile" id="jobprofile" className="inputbox">
                        <option value="web">Web Developer</option>
                        <option value="android">Android Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                        <option value="flutter">Flutter Developer</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="openings" style={{marginRight:"20px"}}>No. of openings</label>
                    <input type="text" name="openings" placeholder="No. of openings" className="inputbox" size="40" />
                </div>

                <div className="input-group">
                    <label htmlFor="skills" style={{marginRight:"25px"}}>Skills Required</label>
                    <input type="text" name="skills" placeholder="Skills required" className="inputbox" size="40" />
                </div>

                <div className="input-group">
                    <label htmlFor="examdate" style={{marginRight:"40px"}}>Date of exam</label>
                    <input type="date" name="examdate" placeholder="Date of exam" className="inputbox" size="40" />
                </div>

                <div className="input-group">
                    <label htmlFor="duedate" style={{marginRight:"70px"}}>Due date</label>
                    <input type="date" name="duedate" placeholder="Due date for application" className="inputbox" size="40" />
                </div>

                <div className="input-group">
                    <label htmlFor="jd" style={{marginTop:"20px",marginRight:"0px"}}>Job Description</label>
                    <input type="file" name="jd" />
                </div>

            </div>
        </div>
    )
}

export default CompanyAddPost
