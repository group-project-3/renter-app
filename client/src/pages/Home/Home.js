import React, { Component } from "react";
import Card from "../../components/Card/Card.js";
import { Container, Row, Col} from "../../components/Grid/Grid.js"

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
  // state = {
  //   item_name: "",
  //   url: "",
  //   location_id: {},
  //   owner_id: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User"
  //   },
  //   price: { type: Number },
  //   available: { type: Boolean }
  // };
  render() {
      return (
          <div>
              <Container fluid>
                  <Row>                      
                      <Col size="md-3">
                          <h1>Item Name</h1>
                          <br></br>
                          < Card />
                      </Col>                     
                  </Row>
              </Container>
          </div>
      )
  }

}


export default Card;