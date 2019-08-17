import React from "react";
import "./style.css";
import { MDBCol, MDBIcon } from "mdbreact";

function Jumbotron() {

    const handleClick = (e) => {
        e.preventDefault()
        console.log("click")
    }

    return (
        <div className="jumbotron text-center">
            <h4>We got the stuff you need!</h4>
            <div>
                <MDBCol md="6">
                    <form className="form-inline mt-4 mb-4">
                        <MDBIcon icon="search" />
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                        <button onClick={handleClick}>Search</button>
                    </form>
                </MDBCol>
            </div>
        </div>
    );
}

export default Jumbotron;