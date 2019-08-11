import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import Wrapper from "../../components/Wrapper";
import Modal from "../../components/Modal/Modal";
import {Button} from 'antd';
// import { Container, Row, Col } from "../../components/Grid/Grid.js";
import API from "../../utils/API.js";
import "./style.css"
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

   showModal = () => {
    this.setState({
      visible: !this.state.modal,
    });
    };

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
                        
                       />
                       <Button class="rent_button" type="primary" onClick={this.showModal}
                            handleOk={this.handleOk}
                            handleCancel={this.handleCancel}
                            >
                            Rent
                             </Button>
                       </div>
                   )}
                   </Wrapper>
                   <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                        <p>Rent Duration</p>
                    </Modal>
           </div>
       )
   }
}
export default Home;