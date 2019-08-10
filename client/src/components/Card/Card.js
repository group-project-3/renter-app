import React from "react";
import "./style.css";


export function Card(props) {
    return (
        <div className="card">
            <img src={props.url} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="">{props.price}</p>
                    <a href="#" className="btn btn-primary">Rent Clubs</a>
                </div>
        </div>

            );
}
            
export default Card;