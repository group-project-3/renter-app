import React, {useState, useEffect, useContext} from "react";
import DatePick from "../DatePick/DatePick"
import API from "../../utils/API"
import { UserConsumer } from "../../UserContext";
import UserProfile from "../../utils/UserProfile"
import { Col, Row } from "../../components/Grid/Grid";
import "./style.css";


export function Card (props) {
    const [name, setName] = useState(props.name)
    const [item_id, setID] = useState(props.id);
    const [price, setPrice] = useState(props.price);
    const [description, setDescription] = useState(props.description);
    const [available, setAvailable] = useState(props.available);
    const [rented_from, setrented_from] = useState(null);
    const [rented_to, setrented_to] = useState(null);
    const user = useContext(UserConsumer)

    useEffect(() => {
        console.log(user._id)
    })

    const handleRentItem = (item_id) => {
        let rentObject = {
            item_id: item_id,
            rented_to: rented_to,
            rented_from: rented_from,
            user_id: user._id
        }

        API.rentItem(rentObject)
        .then(res => {
            console.log(res)
            console.log("available val", {available})
        })
        .catch(err => {
            console.log(err)
        })
    };

    const handleReturnItem = (item_id) => {

        API.returnItem(item_id)
        .then(res => {
            console.log(res)
            console.log("available val", {available})
            setAvailable()
        })
        .catch(err => {
            console.log(err)
        })
    };

    const renderContent = () => {
        if (user._id) {
            return   <div>
                <p>Rent Duration:</p>
                <DatePick setrented_from={setrented_from} setrented_to={setrented_to}
                rented_to={rented_to} rented_from={rented_from}/>
                {available ?
                
                    <button className="btn btn-sm  btn-primary"
                        onClick={() => { handleRentItem(item_id) }}>Rent

                </button>
                        :
                        <button className="btn btn-sm btn-primary"
                            onClick={() => { handleReturnItem(item_id) }}>Return
                </button>
                    }
            </div>                           
        } else {
            return <p>Please Sign In To Rent</p>
        }
    }

    return (


        <div className="card" style={{ "min-width": "960px", "max-height": "200px", "margin-bottom": "50px", "margin-left": "200px" }}>
            <Row>

            <Col size="md-6" className="itemImg" style={{"max-height" : "185px", "float" : "left"}}>
                <img src={props.url} className="card-img-top" alt="..." style={{"max-height" : "300px", "float" : "left"}}></img>
            </Col>
            <Col size="md-6" className="itemInfo" style={{"float" : "right"}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="line">{description}</p>
                    <p className="">{price}</p>

                    {renderContent()}
                
                    </div>
                </Col>
            </Row>
        </div>

    );
}

export default Card;

