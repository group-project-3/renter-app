import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API.js";
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
           <div>
                <Wrapper>
                   {this.state.items.map(item =>
                    <div className="card_holder">
                       <Card
                           id={item._id}
                           key={item._id}
                           name={item.item_name}
                           description={item.item_description}
                           url={item.url}
                           price={item.price}
                           available={item.available}
                       />
                       </div>
                   )}
                   </Wrapper>
           </div>
       )
   }
}
export default Home;