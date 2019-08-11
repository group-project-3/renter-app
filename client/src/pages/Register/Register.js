import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, FormBtn, LocationInput } from "../../components/Form/Form";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password !== this.state.password_confirm) {
            console.log("error: invalid password");
        } else {
            API.create(this.state)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
        this.setState({ redirect: true })
    }


    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        return (
            <Router>
                <Switch>
                    <div>
                        <Container fluid>
                            <Row>
                                <Col size="md-3"></Col>
                                <Col size="md-6">
                                    <h1>Register a New Account</h1>
                                    <br></br>
                                    <form>


                                        <LocationInput
                                            value={this.state.location}
                                            onChange={this.handleInputChange}
                                            name="location"
                                            placeholder="Select location"
                                        />


                                        <p>First Name</p>
                                        <Input
                                            value={this.state.first_name}
                                            onChange={this.handleInputChange}
                                            name="first_name"
                                            placeholder="Please Enter Your First Name"
                                        />

                                        <p>Last Name</p>
                                        <Input
                                            value={this.state.last_name}
                                            onChange={this.handleInputChange}
                                            name="last_name"
                                            placeholder="Please Enter Your Last Name"
                                        />

                                        <p>Email</p>
                                        <EmailInput
                                            value={this.state.email_address}
                                            onChange={this.handleInputChange}
                                            name="email_address"
                                            placeholder="Please Enter Your Email Address"
                                        />

                                        <p>Username</p>
                                        <Input
                                            value={this.state.username}
                                            onChange={this.handleInputChange}
                                            name="username"
                                            placeholder="Create a Username"
                                        />

                                        <p>Password</p>
                                        <PasswordInput
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            name="password"
                                            placeholder="Please Enter a Password"
                                        />

                                        <p>Confirm Password</p>
                                        <PasswordInput
                                            value={this.state.password_confirm}
                                            onChange={this.handleInputChange}
                                            name="password_confirm"
                                            placeholder="Please Confirm Your Password"
                                        />
                                        <FormBtn onClick={this.handleFormSubmit}>
                                            Register
                            </FormBtn>
                                    </form>
                                </Col>
                                <Col size="md-3"></Col>
                            </Row>
                        </Container>
                    </div>
                </Switch>
            </Router>
        );
    };

}

export default Register;