import React, { Component, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import StudentPortal from '../Student Portal/StudentPortal'
import ApprovedOpening from '../UserData/ApprovedOpeningStudent';
import ApprovedOpeningStudent from '../UserData/ApprovedOpeningStudent';
import Cryptr from 'crypto-js'


const StudentID = "";


function StudentLogin() {

    const [UserID, setUserID] = useState("");
    const [UserPassword, setUserPassword] = useState("");


    let retrieveID = localStorage.getItem("ID");
    let retrievePassword = localStorage.getItem("Password");

    if(retrieveID!=null && retrievePassword!==null){
            var bytes = Cryptr.AES.decrypt(retrieveID, 'my-secret-key@123');
            retrieveID= JSON.parse(bytes.toString(Cryptr.enc.Utf8));
            var bytesfor = Cryptr.AES.decrypt(retrievePassword, 'my-secret-key@123');
            retrievePassword= JSON.parse(bytesfor.toString(Cryptr.enc.Utf8));

            Axios.post("http://localhost:3001/login",{
                UserID: retrieveID,
                UserPassword: retrievePassword
            }).then((response)=>{
                let result = response.data;
                // console.log("Demo Testing"+"   "+result)
                if(result=="Valid"){
                    let IsLogin = 1;
                    let IsStudent=1;
                    let IsCompany=0;
                    let Password = UserPassword;
                    //let IsAdmin=0;
                    let ID=retrieveID;
                    ID  = Cryptr.AES.encrypt(JSON.stringify(ID), 'my-secret-key@123').toString();
                    // Password  = Cryptr.AES.encrypt(JSON.stringify(Password), 'my-secret-key@123').toString();
                    // ID=crptr.decrypt(ID)
                    // IsStudent=crptr.encrypt(IsStudent)
                    // IsCompany=crptr.encrypt(IsCompany)
                    // IsLogin=crptr.encrypt(IsLogin)
                    sessionStorage.setItem('IsLogin',IsLogin);
                    sessionStorage.setItem('IsStudent',IsStudent);
                    sessionStorage.setItem('IsCompany',IsCompany);
                    sessionStorage.setItem('ID',ID);
                    // localStorage.setItem("ID",ID);
                    // localStorage.setItem("Password",Password);
                    window.location.href = "/studentportal/" + `${retrieveID}`;
                    console.log(response);
                    console.log("Kavya");
                }else{

                    if(window.confirm("Invalid Credentials..!! Do you want to try again?")){
                        localStorage.removeItem("ID");
                        localStorage.removeItem("Password");
                        window.location.href="/login"
                    }else{
    
                    }

                   
                }
            })

    }


    const login = (props) => {
        Axios.post("http://localhost:3001/login", {
            UserID: UserID,
            UserPassword: UserPassword
        }).then((response) => {
            // StudentID = UserID;
            // <ApprovedOpening UserID={StudentID}/>
            //
            // return <ApprovedOpeningStudent UserID={UserID}/>
            let result = response.data;
            // console.log("Demo Testing"+"   "+result)
            if(result=="Valid"){
                let IsLogin = 1;
                let IsStudent=1;
                let IsCompany=0;
                let Password = UserPassword;
                //let IsAdmin=0;
                let ID=UserID;
                ID  = Cryptr.AES.encrypt(JSON.stringify(ID), 'my-secret-key@123').toString();
                Password  = Cryptr.AES.encrypt(JSON.stringify(Password), 'my-secret-key@123').toString();
                // ID=crptr.decrypt(ID)
                // IsStudent=crptr.encrypt(IsStudent)
                // IsCompany=crptr.encrypt(IsCompany)
                // IsLogin=crptr.encrypt(IsLogin)
                sessionStorage.setItem('IsLogin',IsLogin);
                sessionStorage.setItem('IsStudent',IsStudent);
                sessionStorage.setItem('IsCompany',IsCompany);
                sessionStorage.setItem('ID',ID);
                localStorage.setItem("ID",ID);
                localStorage.setItem("Password",Password);
                window.location.href = "/studentportal/" + `${UserID}`;
                console.log(response);
                console.log("Kavya");
            }else{
                if(window.confirm("Invalid Credentials..!! Do you want to try again?")){
                    window.location.href="/login"
                }else{

                }
            }
            
        //    return <ApprovedOpeningStudent userID={UserID}/>
            
 

            // console.log(response);

        });
    };

    return (
        <div>
            <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
                <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/login.css"></link>

                <div class="container">
                    <div class="card login-card">
                        <div class="row no-gutters">
                            <div class="col-md-5">
                                <img src="assets/images/poster.png" alt="login" class="login-card-img" />
                            </div>

                            <div class="col-md-7">
                                <div class="card-body">
                                    <p class="login-card-description">Sign into your account</p>
                                    <form action="#!">
                                        <div class="form-group">
                                            <label for="email" class="sr-only">Email</label>
                                            <input type="email" name="email" id="email" class="form-control" placeholder="Email address"
                                                onChange={(e) => {
                                                    setUserID(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div class="form-group mb-4">
                                            <label for="password" class="sr-only">Password</label>
                                            <input type="password" name="password" id="password" class="form-control" placeholder="***********"
                                                onChange={(e) => {
                                                    setUserPassword(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login" onClick={login} />
                                    </form>

                                    <a href="#!" class="forgot-password-link">Forgot password?</a>
                                    <p class="login-card-footer-text">Don't have an account? <a href="#!" class="text-reset">Register here</a></p>
                                    <nav class="login-card-footer-nav">
                                        <a href="#!">Terms of use.</a>
                                        <a href="#!">Privacy policy</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default StudentLogin;