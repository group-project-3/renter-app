import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import Wrapper from "../../components/Wrapper";
import Modal from "../../components/Modal/Modal";
// import { Container, Row, Col } from "../../components/Grid/Grid.js";
import API from "../../utils/API.js";
class Home extends Component {
   state = {
       items: [],
       item: "",
       description: "",
       price: "",
       item_id: "",
       visable: false
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
           console.log('state: ', this.state.items)
       })
   }

   handleImageChange = event => {
    this.setState({image: event.target.files[0]}, this.callback)
    }

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
    handleCancel = e => {
    console.log(e);
    this.setState({
        visible: false,
    });
    };

   render() {
       return (
           <div>
                <Wrapper>
                   {this.state.items.map(item =>
                    <div>
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
                       />
                       <Modal />
                       </div>
                   )}
                   </Wrapper>
           </div>
       )
   }
}
export default Home;