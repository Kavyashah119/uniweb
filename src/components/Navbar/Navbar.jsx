import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "./Button"
import './Navbar.css'
import {BrowserRouter,Link} from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
            <img src="https://www.iaspaper.net/wp-content/uploads/2018/08/Charusat.png" id="charusatImage" style={{float:'left',margin:8,paddingLeft:5}} width="90px" height="90px" />
                <h1 className="navbar-logo">CHARUSAT<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
                <BrowserRouter>
                    <Button><Link to="/register">Sign Up</Link></Button>
                </BrowserRouter>

                
            </nav>
        )
    }
}

export default Navbar;