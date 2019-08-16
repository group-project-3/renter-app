import React from "react";
import DatePick from "../DatePick/DatePick"
import { Col, Row } from "../../components/Grid/Grid";
import "./style.css";


export function Card(props) {
    return (
        <div className="card" style={{ "min-width": "960px", "max-height": "200px", "margin-bottom": "50px", "margin-left": "200px" }}>
            <Row>
                <Col size="md-6" className="itemImg" style={{ "max-height": "185px", "float": "left" }}>
                    <img src={props.url} className="card-img-top" alt="..." style={{ "max-height": "300px", "float": "left" }}></img>
                </Col>
                <Col size="md-6" className="itemInfo" style={{ "float": "right" }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="">{props.description}</p>
                        <p className="">{props.price}</p>
                        <p>Rent Duration:</p>
                        <DatePick {...props} />
                        {props.available ?

                            <button className="btn btn-sm  btn-primary"
                                onClick={() => { props.handleRentItem(props.id) }}>Rent
                    </button>
                            :
                            <button className="btn btn-sm btn-primary"
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

