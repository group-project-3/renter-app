import React, { Component } from "react";
import API from "../../utils/API"
import UserProfile from "../../utils/UserProfile"
import { UserConsumer } from "../../UserContext";
import NavGuest from "./NavGuest"
import NavUser from "./NavUser"

import "./style.css";

class Nav extends Component {

    handleLogOut = () => {
        let session_token = localStorage.getItem("x-session-token")
        if (session_token) {
            API.logout({ session_token })
                .then(logoutResult => {
                    localStorage.removeItem("x-session-token")
                })
        } else {
            console.log('user not logged in')
        }
    }

    isAuthenticated = () => {
        return localStorage.getItem("x-session-token")
    }
    render() {
        return (
            <UserConsumer>
                {props => {
                    const id = props._id
                    if (id) {
                        return <NavUser
                            handleLogOut={this.handleLogOut}
                            first_name={props.first_name}
                        />
                    } else {
                        return <NavGuest />
                    }
                    // return <div>
                    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    //         <a className="navbar-brand" href="/">Renter App</a> 
                    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    //             <span className="navbar-toggler-icon"></span>
                    //         </button>

                    //         Welcome {props.first_name}
                    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    //             <ul className="navbar-nav mr-auto">
                    //                 <li className="nav-item active">
                    //                     <a className="nav-link" href="/PostItem">Post</a>
                    //                 </li>
                    //             </ul>
                    //             <ul className="navbar-nav ml-auto">
                    //                 <li className="nav-link">
                    //                     <a className="nav-link" href="/LogIn">Log In<span className="sr-only"></span></a>
                    //                 </li>
                    //                 <li className="nav-link">
                    //                     <a className="nav-link" href="/Register">Register<span className="sr-only"></span></a>
                    //                 </li>
                    //                 <li className="nav-link">
                    //                     <a className="nav-link" href="#" onClick={this.handleLogOut}>Log Out<span className="sr-only"></span></a>
                    //                 </li>

                    //             </ul>
                    //         </div>
                    //     </nav>
                    // </div>
                    
                }}
            </UserConsumer>
        );
    }
}
export default Nav