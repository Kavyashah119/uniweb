import React, { useState } from 'react';
import './Register.css';
import { Multiselect } from 'multiselect-react-dropdown';

const Company_Register = () => {

    const cities = [
        { City: "Ahmedabad", id: 1 },
        { City: 'Vadodara', id: 2 },
        { City: 'Rajkot', id: 1 },
        { City: 'Surat', id: 1 },
        { City: 'Mumbai', id: 1 },
    ]

    const [locations] = useState(cities);

    const tools = [
        { Tool: "Android Studio", id: 1 },
        { Tool: "ReactJS", id: 2 },
        { Tool: "Flutter", id: 1 },
        { Tool: "Java", id: 1 },
        { Tool: "Python", id: 1 }
    ]

    const [tat] = useState(tools);

    return (
        <div className="root-container">
            <div className="inner-container">

                <section className="header">
                    <h4>Company - Registration</h4>
                </section>

                <div className="box">
                    <div className="split right">

                        <div className="input-group">
                            <label htmlFor="name" style={{ marginRight: "110px" }}>Name</label>
                            <input type="text" name="name" placeholder="Company Name" className="inputbox" size="40" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="username" style={{ marginRight: "110px" }}>UserName</label>
                            <input type="text" name="username" placeholder="Set UserName" className="inputbox" size="40" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password" style={{ marginRight: "110px" }}>Set Password</label>
                            <input type="password" name="password" placeholder="Password" className="inputbox" size="40" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="owner" style={{ marginRight: "60px" }}>Owner Name</label>
                            <input type="text" name="owner" placeholder="Owner Name" className="inputbox" size="40" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="ceo" style={{ marginRight: "120px" }}>CEO</label>
                            <input type="text" name="ceo" placeholder="CEO's Name" className="inputbox" size="40" required />
                        </div>

                        <div className="input-group" >
                            <label htmlFor="address" style={{ verticalAlign: "top", marginRight: "95px" }}>Address</label>
                            <textarea name="address" placeholder="Address" className="inputbox" rows="5" cols="100" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="yoe">Year of Establishment</label>
                            <input type="text" name="yoe" placeholder="Year of Establishment" className="inputbox" size="40" maxLength="4" required />
                        </div>

                        <div className="input-group">
                            <label htmlFor="branches" style={{ marginRight: "40px" }}>No. of Branches</label>
                            <input type="number" name="branches" placeholder="Total branches" className="inputbox" size="40" required />
                        </div>

                        <div className="multi-group">
                            <label htmlFor="location" style={{ marginRight: "85px" }}>Location(s)</label>
                            <Multiselect options={locations} displayValue="City" className="inputbox" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="employees" style={{ marginRight: "30px" }}>No. of Employees</label>
                            <select name="employees" id="employees" className="inputbox">
                                <option value=">20">Less than 20</option>
                                <option value="20-50">Between 20-50</option>
                                <option value="50-75">Between 50-75</option>
                                <option value=">75">Greater then 75</option>
                            </select>
                        </div>

                        <div className="multi-group">
                            <label htmlFor="tools">Tools and Technology majorly used</label>
                            <Multiselect options={tat} displayValue="Tool" className="inputbox" />
                        </div>

                        <input type="submit" value="Submit" />

                        <footer>
                            <p>Copyright @ 2021, Inc. All Rights Reserved</p>
                        </footer>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Company_Register;
