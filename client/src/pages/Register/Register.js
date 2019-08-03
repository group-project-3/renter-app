import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { EmailInput, PasswordInput, FormBtn } from "../../components/Form/Form"


class Register extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    };


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
                            <EmailInput
                            // value={this.state.email}
                            // onChange={this.handleInputChange}
                            name="email"
                            placeholder="Please Enter Your Email Address"
                            />

                            <PasswordInput
                            // value={this.state.password}
                            // onChange={this.handleInputChange}
                            name="password"
                            placeholder="Please Enter a Password"
                            />

                            <PasswordInput
                            // value={this.state.confirmPassword}
                            // onChange={this.handleInputChange}
                            name="confirmPassword"
                            placeholder="Please Confirm Your Password"
                            />
                            <FormBtn >
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