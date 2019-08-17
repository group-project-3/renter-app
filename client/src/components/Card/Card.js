import React from "react";
import DatePick from "../DatePick/DatePick"
import { Col, Row } from "../../components/Grid/Grid";
import "./style.css";


export function Card(props) {
    return (
        <div className="card" style={{ "min-width": "960px", "max-height": "200px", "margin-bottom": "50px", "margin-left": "200px" }}>
            <Row>

            <Col size="md-6" className="itemImg" style={{"max-height" : "185px", "float" : "left"}}>
                <div className="img-container">
                <img src={props.url} className="card-img-top" alt="..." style={{"float" : "left"}}></img>
                </div>
            </Col>
            <Col size="md-6" className="itemInfo" style={{"float" : "right"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="line">{props.description}</p>
                    <p className=""><span>&#36;</span>{props.price}</p>
                    <p>Rent Duration:</p>
                    <DatePick {...props} />
                    {props.available ?
                    
                        <button className="btn btn-primary btn-sm btn-bottom"
                            onClick={() => { props.handleRentItem(props.id) }}>Rent

                    </button>
                            :
                            <button className="btn btn-primary btn-sm btn-bottom"
                                onClick={() => { props.handleReturnItem(props.id) }}>Return
                    </button>
                        }
                    </div>
                </Col>
            </Row>
        </div>

    );
}

export default Card;

