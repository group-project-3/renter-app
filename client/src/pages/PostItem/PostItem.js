import React, { Component } from "react";
import ReactDOM from "react-dom"
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, PriceInput, TextArea, FileInput, FormBtn } from "../../components/Form/Form"
import UploadImage from "../../components/UploadImage/UploadImage";
import API from "../../utils/API";


class PostItem extends Component {
    state = {
        item_name: "",
        url: "",
        item_description: "",
        price: "",
        image: null,
    };

    callback = () => {
        console.log(this.state);
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value}, this.callback);
      };

    handleFormSubmit = () => {

        let newItem = {
            item_name: this.state.item_name,
            url: this.state.url,
            item_description: this.state.item_description,
            price: this.state.price
        }

        API.createItem(newItem);
        
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
            this.handleFormSubmit()
        }).catch(err => {
            console.log(err)
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
                            name="item_name"
                            placeholder="Please Enter a Name for your Item"
                            />

                            <TextArea
                            value={this.state.item_description}
                            onChange={this.handleInputChange}
                            name="item_description"
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