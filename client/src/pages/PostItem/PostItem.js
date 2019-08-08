import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, PriceInput, TextArea, FileInput, FormBtn } from "../../components/Form/Form"
import UploadImage from "../../components/UploadImage/UploadImage";
import API from "../../utils/API";


class PostItem extends Component {
    state = {
        item_name: "",
        url: [],
        item_description: "",
        // location_id: "",
        // owner_id: "",
        price: "",
        image: null
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
        console.log(this.state);
        
    }

    handleImageUpload = event => {
        API.uploadImage(this.state.image)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

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
                            value={this.state.item_name}
                            onChange={this.handleInputChange}
                            name="itemName"
                            placeholder="Please Enter a Name for your Item"
                            />

                            <TextArea
                            value={this.state.item_description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder="Please Enter an Item Description"
                            />

                            <PriceInput
                            value={this.state.price}
                            onChange={this.handleInputChange}
                            name="price"
                            placeholder="Please Enter a Price"
                            />

                            <UploadImage handleInputChange={this.handleInputChange}/>
                            <FormBtn onClick={this.handleFormSubmit} onClick={this.handleImageUpload}>
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