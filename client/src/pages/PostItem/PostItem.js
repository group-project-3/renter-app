import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, PriceInput, TextArea, FileInput, FormBtn } from "../../components/Form/Form"
import UploadImage from "../../components/UploadImage/UploadImage";
import API from "../../utils/API";
import "dotenv";
import axios from "axios";
import { set } from "mongoose";


class PostItem extends Component {
    state = {
        item_name: "",
        url: [],
        item_description: "",
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

    handleImageChange = event => {
        this.setState({image: event.target.files[0]}, this.callback)
    }

    handleImageUpload = event => {
        event.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('image',  this.state.image);

        API.imageUpload(bodyFormData)
        .then(res => {
            console.log(res)
            this.setState({url: res.data.data.link}, this.callback)
        }).catch(err => {
            console.log(err);
        })
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

                            <UploadImage handleImageChange={this.handleImageChange}/>
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