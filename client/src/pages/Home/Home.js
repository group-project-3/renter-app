import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import { Container, Row, Col } from "../../components/Grid/Grid.js";
import API from "../../utils/API.js";
// export default function Home() {
//     return (
//       <div>
//           <h1>THIS IS THE HOME PAGE</h1>
//            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       </div>
//     );
//   }
class Home extends Component {
   state = {
       items: [],
       item: "",
       description: "",
       price: "",
       item_id: ""
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
   render() {
       return (
           <div>
               <Container fluid>
                   {this.state.items.map(item =>
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
                   )}
                   <Row>
                       <Col size="md-3">
                           <h1>Item Name</h1>
                           <br></br>
                       </Col>
                   </Row>
               </Container>
           </div>
       )
   }
}
export default Home;