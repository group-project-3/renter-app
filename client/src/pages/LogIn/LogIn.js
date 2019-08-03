import React, { Components } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, PasswordInput, FormBtn } from "../../components/Form/Form"

class LogIn extends Component {
    state = {
        username: "",
        password: ""
    };


    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-3"></Col>
                        <Col size="md-6">
                            <h1>Log-In</h1>
                            <br></br>
                            <form>
                                <Input
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    name="username"
                                    placeholder="Enter Username"
                                />

                                <PasswordInput
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Enter Password"
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
        )
    }

}


export default LogIn;
