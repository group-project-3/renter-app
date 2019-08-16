import React from "react";
import { MDBCol } from "mdbreact";
import "./style.css"

export function SearchBar() {
    return (
        <div className='form'>
            <MDBCol md="6">
                <input className="form-control" type="text" placeholder="Search products" aria-label="Search" />
            </MDBCol>
        </div>
    );
}

export default SearchBar;