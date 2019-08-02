import React from "react";
import "./style.css";

function Nav() {
    return (
       <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Renter App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/Rent">Rent</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/Post">Post</a>
                </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li className="nav-link">
                        <a class="nav-link" href="/LogIn">Log In<span class="sr-only"></span></a>
                    </li>
                    <li className="nav-link">
                        <a class="nav-link" href="#">Log Out<span class="sr-only"></span></a>
                    </li>
                    <li className="nav-link">
                        <a class="nav-link" href="/Register">Register<span class="sr-only"></span></a>
                    </li>
                    <li className="nav-link">
                        <a class="nav-link" href="/AccountSettings">Account Settings<span class="sr-only"></span></a>
                    </li>
                </ul>
            </div>
            </nav>
       </div>
    );
}

export default Nav