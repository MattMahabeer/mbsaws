import React from 'react';
import logo from '../assets/images/logo.png';

export default function Navbar() {


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className="container-fluid row">
                    <div className="col-lg-3 col-12 nav-brand">
                        <h6>
                            <img src={logo} />
                        </h6>
                    </div>
                </div>
            </div>
        </nav>
    )
}