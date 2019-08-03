import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, FormBtn } from "../../components/Form/Form"


class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
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
                        <h1>Register</h1>
                        <br></br>
                        <form>
                            <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Create a Username"
                            />

                            <EmailInput
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Please Enter Your Email Address"
                            />

                            <PasswordInput
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Please Enter a Password"
                            />

                            <PasswordInput
                            value={this.state.confirmPassword}
                            onChange={this.handleInputChange}
                            name="confirmPassword"
                            placeholder="Please Confirm Your Password"
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

export default Register;