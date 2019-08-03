import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, EmailInput, PasswordInput, FormBtn } from "../../components/Form/Form"


class Register extends Component {
    state = {
        first_name: "",
        last_name: "",
        email_address: "",
        username: "",
        password: "",
        password_confirm: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password !== this.state.password_confirm){
            console.log("error: invalid password");
        } else {
            API.create(this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err));
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
                            value={this.state.first_name}
                            onChange={this.handleInputChange}
                            name="first_name"
                            placeholder="First Name"
                            />

                            <Input
                            value={this.state.last_name}
                            onChange={this.handleInputChange}
                            name="last_name"
                            placeholder="Last Name"
                            />

                            <EmailInput
                            value={this.state.email_address}
                            onChange={this.handleInputChange}
                            name="email_address"
                            placeholder="Please Enter Your Email Address"
                            />

                            <Input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Create a Username"
                            />

                            <PasswordInput
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Please Enter a Password"
                            />

                            <PasswordInput
                            value={this.state.password_confirm}
                            onChange={this.handleInputChange}
                            name="password_confirm"
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