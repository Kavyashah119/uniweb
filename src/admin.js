import React, { Component } from 'react';





function admin(){

    const student = () =>{
        window.location.href = "/admin/student";
    }

        return(
            <div>
                <h1>Hello</h1>
                <button onClick={student}>Student</button>
                <button>Company</button>
            </div>
        );
}

export default admin;