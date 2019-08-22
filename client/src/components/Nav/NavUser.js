import React, { Component } from "react";

function NavGuest(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="/">Renter App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
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