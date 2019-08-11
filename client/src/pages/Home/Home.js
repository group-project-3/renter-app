import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import Wrapper from "../../components/Wrapper";
import Modal from "../../components/Modal/Modal";
import DatePick from "../../components/DatePick/DatePick"
import {Button} from 'antd';
import API from "../../utils/API.js";
import "./style.css"
class Home extends Component {
   state = {
       items: [],
       item: "",
       description: "",
       price: "",
       item_id: "",
       visable: false,
       startDate: "",
       endDate: "",
   }

   callback = () => {
    console.log(this.state);
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value}, this.callback);
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
                        handleInputChange={this.handleInputChange}
                        >
                        <p>Rent Duration</p>
                        <DatePick handleInputChange={this.props.handleInputChange} />
                        <br/>

                    </Modal>
           </div>
       )
   }
}
export default Home;