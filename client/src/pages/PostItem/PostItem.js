import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, PriceInput, TextArea, FileInput, FormBtn } from "../../components/Form/Form"
import UploadImage from "../../components/UploadImage/UploadImage";
import PostItemCard from "../../components/PostItemCard/PostItemCard"
import { UserConsumer } from "../../UserContext";
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
        this.setState({ [name]: value }, this.callback);
    };

    handleFormSubmit = () => {
        window.location.href = "/";
        let newItem = {
            item_name: this.state.item_name,
            url: this.state.url,
            item_description: this.state.item_description,
            price: this.state.price
        }

        API.createItem(newItem);

    }

    handleImageChange = event => {
        this.setState({ image: event.target.files[0] }, this.callback)
    }

    handleImageUpload = event => {
        event.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('image', this.state.image);

        API.imageUpload(this.state.image)
            .then(res => {
                console.log(res)
                this.setState({ url: res.data.data.link }, this.callback)
                this.handleFormSubmit()
            }).catch(err => {
                console.log(err)
            });
    }


    render() {
        return (
            <UserConsumer>
                {props => {
                    return <div>
                            <PostItemCard
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                            handleImageChange={this.handleImageChange}
                            handleImageUpload={this.handleImageUpload}
                            >

                            </PostItemCard>
                    </div>
                }}
            </UserConsumer>
        );
    };

}

export default PostItem;