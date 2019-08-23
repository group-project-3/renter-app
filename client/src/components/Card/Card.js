import React, { useState, useEffect, useContext } from "react";
import DatePick from "../DatePick/DatePick"
import API from "../../utils/API"
import { UserConsumer } from "../../UserContext";
import { Col, Row } from "../../components/Grid/Grid";
import "./style.css";


export function Card(props) {
    const [name, setName] = useState(props.name)
    const [item_id, setID] = useState(props.id);
    const [price, setPrice] = useState(props.price);
    const [description, setDescription] = useState(props.description);
    let [available, setAvailable] = useState(props.available);
    const [rented_from, setrented_from] = useState(null);
    const [rented_to, setrented_to] = useState(null);
    const user = useContext(UserConsumer)

    const handleRentItem = (item_id, price) => {
        let rentObject = {
            email_address: user.email_address,
            item_id: item_id,
            price: price,
            rented_to: rented_to,
            rented_from: rented_from,
            user_id: user._id
        }
        console.log(rentObject);
        API.rentItem(rentObject)
            .then(res => {
                console.log(res)
                setAvailable(available = false)
                console.log("available val", { available })
            })
            .catch(err => {
                console.log(err)
            })
    };

    const handleReturnItem = (item_id) => {
        let rentObject = {
            item_id: item_id,
            user_id: user._id
        }
        API.returnItem(rentObject)
            .then(res => {
                console.log(res)
                setAvailable(available = true)
                setrented_from(null)
                setrented_to(null)
                console.log("available val", { available })
            })
            .catch(err => {
                console.log(err)
            })
    };

    const renderContent = () => {
        if (user._id) {
            return <div>
                <p class="rent-duration">Rent Duration:</p>
                <DatePick setrented_from={setrented_from} setrented_to={setrented_to}
                    rented_to={rented_to} rented_from={rented_from} />
                <div class="card-footer">
                    {available ?

                        <button className="btn btn-m  btn-primary btn-success"
                            onClick={() => { handleRentItem(item_id) }}>Rent
                    </button>
                        :
                        <button className="btn btn-m btn-success btn-primary"
                            onClick={() => { handleReturnItem(item_id) }}>Return
                    </button>
                    }
                </div>
            </div>
        } else {
            return <p>Please Sign In To Rent</p>
        }
    }

    return (


        <div className="card" style={{ "min-width": "800px", "margin-bottom": "20px", "padding-bottom": "20px", }}>
            <Row>

                <Col size="md-3" className="itemImg" style={{ "max-height": "185px", "float": "left" }}>
                    <div className="img-container">
                        <img src={props.url} className="card-img-top" alt="..." style={{ "float": "left" }}></img>
                    </div>
                </Col>
                <Col size="md-6" className="itemInfo" style={{ "float": "right" }}>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="line">{description}</p>
                        <p className="price"><span>&#36;</span>{price}</p>

                        {renderContent()}

                    </div>
                </Col>
            </Row>
        </div>

    );
}

export default Card;

