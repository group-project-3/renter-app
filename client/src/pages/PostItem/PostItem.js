import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, PriceInput, FormBtn } from "../../components/Form/Form"


class PostItem extends Component {
    state = {
        itemName: "",
        description: "",
        location: "",
        price: "",
        contact: ""
    };

    callback = () => {
        console.log(this.state);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value}, this.callback);
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword){
            console.log("error: invalid password");
        } else {
            console.log("password confirmed");
        }
    }


    render() {
        return(
        <div>
            <Container fluid>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-6">
                        <h1>Post an Item</h1>
                        <br></br>
                        <form>
                            <Input
                            value={this.state.itemName}
                            onChange={this.handleInputChange}
                            name="itemName"
                            placeholder="Please Enter a Name for your Item"
                            />

                            <Input
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder="Please Enter an Item Description"
                            />

                            <Input
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            name="location"
                            placeholder="Please an Item Location"
                            />

                            <PriceInput
                            value={this.state.price}
                            onChange={this.handleInputChange}
                            name="price"
                            placeholder="Please Enter a Price"
                            />

                            <Input
                            value={this.state.contact}
                            onChange={this.handleInputChange}
                            name="contact"
                            placeholder="Please Enter a Contact Phone Number"
                            />
                            <FormBtn onClick={this.handleFormSubmit}>
                                Submit
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-3"></Col>
                </Row>
            </Container>
        </div>
        );
    };

}

export default PostItem;