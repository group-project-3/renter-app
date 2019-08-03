import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, FormBtn } from "../../components/Form/Form"


class Register extends Component {
    state = {
        email: "",
        password: ""
    };


    render() {
        return(
        <div>
            <Container d-flex justify-content-center>
                <Row>
                    <Col size="md-8">
                        <h1>Register</h1>
                        <br></br>
                        <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Please Enter Your Email Address"
                        />

                        <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Please Enter a Password"
                        />

                        <Input
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        name="confirmPassword"
                        placeholder="Please Confirm Your Password"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        );
    };

}

export default Register;