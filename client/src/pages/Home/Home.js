import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API.js";
import { UserConsumer } from "../../UserContext";

import "./style.css"
class Home extends Component {
   state = {
       items: []
   }

   componentDidMount() {
       this.findItems();
       console.log("testing");
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

   render() {
       return (

                <UserConsumer>
                {props => {
                    return <div>
                        <Wrapper>
                            {this.state.items.map(item =>

                                <Card
                                    findItems={this.findItems}
                                    id={item._id}
                                    key={item._id}
                                    name={item.item_name}
                                    description={item.item_description}
                                    url={item.url}
                                    price={item.price}
                                    available={item.available}
                                />

                            )}
                        </Wrapper>
                    </div>
                }}
            </UserConsumer>

       )
   }
}
export default Home;