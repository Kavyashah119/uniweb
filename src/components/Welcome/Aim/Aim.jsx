import React from 'react'
import './Aim.css'
import './responsive.css'
import WiproImg from './img/wipro.jpg'
import Apple from './img/apple.jpg'
import Amazon from './img/amazon.png'
import Facebook from './img/facebook.jpg'
import TCS from './img/tcs.jpg'
import Kavya from './img/kavya1.jpg'
import Kirtan from './img/kirtan1.jpeg'
import Axat from './img/Axat1.jpg'

const Aim = () => {
    return (

        <>
            <div className="wrapper">
                <section className="our_activity">
                    <h2>OUR AIM</h2>
                    <p>We aim towards building a bridge between industry and academia, <br /> by providing recruitment to students and managing pool placement drives.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-12">
                                <div className="single-Promo">
                                    <div className="promo-icon">
                                        <i className="material-icons">near_me</i>
                                    </div>
                                    <h2><a href="#">Placement</a></h2>
                                    <p> We help applicants to find job according to their need and skills by showimg them recuriters based on their resume and connect them together. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="single-Promo">
                                    <div className="promo-icon">
                                        <i className="material-icons">favorite</i>
                                    </div>
                                    <h2><a href="#">Success Rate</a></h2>
                                    <p> Our placement success rates are off the charts. Currently our success rate in finding people their dream job is 87% and is growing every second. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="single-Promo">
                                    <div className="promo-icon">
                                        <i className="material-icons">dashboard</i>
                                    </div>
                                    <h2><a href="#">Great Recruiters</a></h2>
                                    <p> Currenty our portal has over 150+ recruiters that are hiring people across various fields. We have 46+ multinational companies connected with us. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our_cuauses">
                    <h2>ONGOING RECRUITMENTS</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="our_cuauses_single owl-carousel owl-theme">
                                    <div className="item">
                                        <img src={Apple} alt="hii" />
                                        <div className="for_padding">
                                            <h2>Apple Inc.</h2>
                                            <p>Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.</p>
                                            <div className="progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "67%" }}></div>
                                                </div>
                                                <p className="progress-left">Recruited: <span>67</span></p>
                                                <p className="progress-right">Total Vacancy: <span>100</span></p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={WiproImg} alt="" />
                                        <div className="for_padding">
                                            <h2>Wipro</h2>
                                            <p>Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. It is headquartered in Bangalore, Karnataka, India.</p>
                                            <div className="progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "38%" }}></div>
                                                </div>
                                                <p className="progress-left">Recruited: <span>76</span></p>
                                                <p className="progress-right">Total Vacancy: <span>200</span></p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={Facebook} alt="" />
                                        <div className="for_padding">
                                            <h2>Facebook, Inc</h2>
                                            <p>Facebook is an American online social media and social networking service based in Menlo Park, California, and a flagship service of the namesake company Facebook, Inc.</p>
                                            <div className="progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}></div>
                                                </div>
                                                <p className="progress-left">Recruited: <span>10</span></p>
                                                <p className="progress-right">Total Vacancy: <span>50</span></p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src={TCS} alt="" />
                                        <div className="for_padding">
                                            <h2>Tata Consultancy Services</h2>
                                            <p>Tata Consultancy Services (TCS) is an Indian multinational information technology services and consulting company. It is a subsidiary of the Tata Group and operates in 149 locations across 46 countries.</p>
                                            <div className="progress-text">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "88%" }}></div>
                                                </div>
                                                <p className="progress-left">Recruited: <span>66</span></p>
                                                <p className="progress-right">Total Vacancy: <span>75</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="block-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-3 col-xs-6 for-border">
                                <div class="block">
                                    <p><i class="material-icons">person_add</i></p>
                                    <p class="counter-wrapper"><span class="fb"></span></p>
                                    <p class="text-block">Applicants Recruited</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-6 for-border">
                                <div class="block">
                                    <p><i class="material-icons">people</i></p>
                                    <p class="counter-wrapper"><span class="code"></span></p>
                                    <p class="text-block">Applicants</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-6 for-border">
                                <div class="block">
                                    <p><i class="material-icons">favorite</i></p>
                                    <p class="counter-wrapper"><span class="bike"></span></p>
                                    <p class="text-block">Shared</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-6 for-border">
                                <div class="block">
                                    <p><i class="material-icons">language</i></p>
                                    <p class="counter-wrapper"><span class="coffee"></span></p>
                                    <p class="text-block">Visitors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="volunteer_area">
                    <h2>Our Developers</h2>
                    <p> This is our team of talented developers <br /> that have made this portal possible.</p>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="volunteer_single owl-theme">
                                    <div class="item">
                                        <img src={Axat} alt="" />
                                        <div class="text">
                                            <h3>Axat Shah</h3>
                                            <h6>Web Developer</h6>
                                            <p>Hard work never killed anybody, but why take a chance?</p>
                                            <h5><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></h5>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src={Kavya} alt="" />
                                        <div class="text">
                                            <h3>Kavya Shah</h3>
                                            <h6>Web Developer</h6>
                                            <p>The only thing that ever sat its way to success was a hen.</p>
                                            <h5><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></h5>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src={Kirtan} alt="" />
                                        <div class="text">
                                            <h3>Kirtan Shah</h3>
                                            <h6>Web Devloper</h6>
                                            <p>You can’t have a million dollar dream with a minimum wage worth ethic.</p>
                                            <h5><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <div class="footer-charity-text">
                                    <h2>CHARUSAT UNIVERSITY MAP</h2>
                                    <iframe style={{ border: "0" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4520366674724!2d72.81831131496003!3d22.59958898516892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar+University+of+Science+and+Technology+(CHARUSAT)!5e0!3m2!1sen!2sin!4v1534486242744" height="220" width="100%" frameborder="0" allowfullscreen=""></iframe>
                                    <hr />
                                    <p><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></p>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-4 col-sm-5">
                                        <div class="footer-text one">
                                            <h3>NEWLY ADDED RECRUITERS</h3>
                                            <ul>
                                                <li><a href="#"><i class="material-icons">keyboard_arrow_right</i> Hyperlink InfoSystem</a></li>
                                                <li><a href="#"><i class="material-icons">keyboard_arrow_right</i> Tata Consultancy Services</a></li>
                                                <li><a href="#"><i class="material-icons">keyboard_arrow_right</i> HCL Technologies</a></li>
                                                <li><a href="#"><i class="material-icons">keyboard_arrow_right</i> Wipro</a></li>
                                                <li><a href="#"><i class="material-icons">keyboard_arrow_right</i> Mphasis</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-3">
                                        <div class="footer-text two">
                                            <h3>USEFUL LINKS</h3>
                                            <ul>
                                                <li><a href="main.html">Home</a></li>
                                                <li><a href="Contact Us/Contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <div class="footer-text one">
                                            <h3>CONTACT US</h3>
                                            <ul>
                                                <li><a href="#"><i class="material-icons">location_on</i>139, CHARUSAT Campus, Highway, Off, Nadiad - Petlad Rd, Changa, Gujarat, India 388421</a></li>
                                                <li><a href="#"><i class="material-icons">email</i>cms@charusat.ac.in</a></li>
                                                <li><a href="#"><i class="material-icons">call</i>+91-9925691113</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bottom">
                        <p>Copyright @ 2021 <a href="#">CHARUSAT UNIVERSITY</a> | All Rights Reserved </p>
                    </div>
                </footer>
            </div>

        </>

    )
}

export default Aim
