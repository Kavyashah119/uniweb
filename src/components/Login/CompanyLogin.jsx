import React, { Component, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import StudentPortal from '../Student Portal/StudentPortal'

function CompanyLogin() {

    const [CUsername, setCUsername] = useState("");
    const [CPassword, setCPassword] = useState("");


    const login = (props) => {
        Axios.post("http://localhost:3001/Clogin", {
            CUsername: CUsername,
            CPassword: CPassword
        }).then((response) => {
            window.location.href = "/companyportal/" + `${CUsername}`;
            console.log(response);
            console.log("Kavya");


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
                                                    setCUsername(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div class="form-group mb-4">
                                            <label for="password" class="sr-only">Password</label>
                                            <input type="password" name="password" id="password" class="form-control" placeholder="***********"
                                                onChange={(e) => {
                                                    setCPassword(e.target.value);
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

export default CompanyLogin;