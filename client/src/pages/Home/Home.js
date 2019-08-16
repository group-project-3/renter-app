import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API.js";
import { UserConsumer } from "../../UserContext";
import { SearchBar } from "../../components/SearchBar/SearchBar"

import "./style.css"
class Home extends Component {
    state = {
        items: [],
        item: "",
        description: "",
        price: "",
        item_id: "",
        rented_to: new Date(),
        rented_from: new Date()
    }

    callback() {
        console.log(this.state)
    }
    componentDidMount() {
        this.findItems();
    }
    findItems = () => {
        API.findAllItems().then(items => {
            // let stateItems = this.state.items;
            let stateItems = this.state.items;
            for (var i = 0; i < items.data.length; i++) {
                stateItems.push(items.data[i]);
            }
            this.setState(stateItems);
        })
    }

    handleRentItem = (item_id) => {
        let rentObject = {
            item_id: item_id,
            rented_from: this.state.rented_from,
            rented_to: this.state.rented_to,
            user_id: ""
        }

        API.rentItem(rentObject)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    handleReturnItem = (item_id) => {

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleStartDate = (date) => {
        this.setState({ rented_from: date })
    };

    handleEndDate = (date) => {
        this.setState({ rented_to: date })
    };


    render() {
        return (
            <UserConsumer>
                {props => {
                    return <div>
                        <SearchBar />
                        <Wrapper>
                            {this.state.items.map(item =>
                                <div className="card_holder">
                                    <Card
                                        handleRentItem={this.handleRentItem}
                                        handleReturnItem={this.handleReturnItem}
                                        id={item._id}
                                        key={item._id}
                                        name={item.item_name}
                                        description={item.item_description}
                                        url={item.url}
                                        price={item.price}
                                        available={item.available}
                                        rented_to={this.state.rented_to} rented_from={this.state.rented_from}
                                        handleStartDate={this.handleStartDate} handleEndDate={this.handleEndDate}
                                    />
                                </div>
                            )}
                        </Wrapper>
                    </div>
                }}
            </UserConsumer>
        )
    }
}
export default Home;