import React, { Component } from "react";

function NavGuest(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Renter App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            Welcome Guest
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/PostItem">Post</a>
                    </li>
                </ul> */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-link">
                        <a className="nav-link" href="/LogIn">Sign in<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="/Register">Register<span className="sr-only"></span></a>
                    </li>
                    {/* <li className="nav-link">
                        <a className="nav-link" href="#" onClick={props.handleLogOut}>Log Out<span className="sr-only"></span></a>
                    </li> */}
                    {/* <li className="nav-link">
                                        <a className="nav-link" href="/AccountSettings">Account Settings<span className="sr-only"></span></a>
                                    </li> */}
                </ul>
            </div>
        </nav>       
    );
}
export default NavGuest