import React, { Component } from "react";

function NavGuest(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Renter App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            Welcome {props.first_name}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/PostItem">Post Items</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-link">
                        <a className="nav-link" href="/" onClick={props.handleLogOut}>Sign out<span className="sr-only"></span></a>
                    </li>
                </ul>
            </div>
        </nav>       
    );
}
export default NavGuest