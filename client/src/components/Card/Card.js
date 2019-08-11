import React from "react";
import "./style.css";


export function Card(props) {
    return (
        <div className="card">
            <img src={props.url} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="">{props.description}</p>
                    <p className="">{props.price}</p>
                    {props.available ?
                    <button className="btn btn-sm  btn-primary"
                        onClick={() => { props.handleRentItem((props.id)) }}>Rent
                    </button>
                    :
                    <button className="btn btn-sm btn-primary"
                        onClick={() => { props.handleReturnItem((props.id)) }}>Return
                    </button>
                }
                </div>
        </div>

            );
}
            
export default Card;