import React, { Component } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper/index"
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import RegisterCard from "../../components/RegisterCard/RegisterCard";
import "./style.css";

class Register extends Component {
    state = {
        location: "",
        first_name: "",
        last_name: "",
        email_address: "",
        username: "",
        password: "",
        password_confirm: "",
        redirect: false
    };

    callback = () => {
        console.log(this.state);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, this.callback);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        
        let registerObject = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email_address: this.state.email_address,
            username: this.state.username,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
            location: this.state.location,

        }

        console.log(registerObject)
        if (this.state.password !== this.state.password_confirm) {
            console.log("error: invalid password");
        } else {
            API.create(registerObject)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
        this.setState({ redirect: true })
    }


    render() {
        if (this.state.redirect === true) {
            return (
                <UserConsumer>
                    {props => {
                        return <Redirect to='/' />
                    }}
                </UserConsumer>
            )
        }
        return (
            <UserConsumer>
                {props => {
                    return <Wrapper>

                                    <RegisterCard
                                    state={this.state}
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    >

                                    </RegisterCard>

                            </Wrapper>
                }}
            </UserConsumer>
        );
    };

}

export default Register;