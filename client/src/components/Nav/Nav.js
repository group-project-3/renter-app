import React from "react";
import "./style.css";

function Nav() {
    return (
       <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Renter App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/RentItem">Rent</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/PostItem">Post</a>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-link">
                        <a className="nav-link" href="/LogIn">Log In<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="#">Log Out<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="/Register">Register<span className="sr-only"></span></a>
                    </li>
                    <li className="nav-link">
                        <a className="nav-link" href="/AccountSettings">Account Settings<span className="sr-only"></span></a>
                    </li>
                </ul>
            </div>
            </nav>
       </div>
    );
}

export default Nav