import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ExportToExcel extends Component{

    render(){
        return(
            <div style={{marginRight: '25px'}}>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="export"
                    table="table-to-xls"
                    filename="filtredData"
                    sheet="tablexls"
                    buttonText="Export"/>
                <table hidden="true" id="table-to-xls">
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Branch</th>
                        <th>FirstName </th>
                        <th>MiddleName </th>
                        <th>LastName</th>
                        <th>CharusatEmail</th>
                        <th>Contact Number</th>
                        <th>CGPA</th>
                        <th>SGPA1</th>
                        <th>SGPA2</th>
                        <th>SGPA3</th>
                        <th>SGPA4</th>
                        <th>SGPA5</th>
                        <th>SGPA6</th>
                        <th>SGPA7</th>
                        <th>SGPA8</th>
                        <th>Domain</th>
                        <th>Preferred Location</th>
                        <th>PersonalEmail</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Achievements</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.posts.map(post => {
                            return(

                                <tr key={post.ID}>
                                    <td>{post.ID }</td>
                                    <td>{post.branch }</td>
                                    <td>{post.FirstName }</td>
                                    <td>{post.MiddleName }</td>
                                    <td>{post.LastName }</td>
                                    <td>{post.CharusatEmail }</td>
                                    <td>{post.MobileNumber }</td>
                                    <td>{post.CGPA }</td>
                                    <td>{post.SGPA1 }</td>
                                    <td>{post.SGPA2 }</td>
                                    <td>{post.SGPA3 }</td>
                                    <td>{post.SGPA4 }</td>
                                    <td>{post.SGPA5 }</td>
                                    <td>{post.SGPA6 }</td>
                                    <td>{post.SGPA7 }</td>
                                    <td>{post.SGPA8 }</td>
                                    <td>{post.domain }</td>
                                    <td>{post.PLocation }</td>
                                    <td>{post.PersonalEmail }</td>
                                    <td>{post.DOB }</td>
                                    <td>{post.Address }</td>
                                    <td>{post.Pincode }</td>
                                    <td>{post.Achievements }</td>
                                    {/* <td>{post.body }</td> */}
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default ExportToExcel;