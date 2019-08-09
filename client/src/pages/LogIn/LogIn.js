import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input, PasswordInput, FormBtn } from "../../components/Form/Form"
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

class LogIn extends Component {
    state = {
        username: "",
        password: "",
        redirect: false
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let loginObj = {
            username: this.state.username,
            password: this.state.password
        }

        API.login(loginObj)
            .then(res => {
                if (res.status == 200) {
                    this.setState({ redirect: true })
                    localStorage.setItem("x-session-token", res.headers["x-session-token"])
                } else {
                    res.json(404)
                }
            })
            .catch(err => console.log(err));

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
                                        <h1>Log-In</h1>
                                        <br></br>
                                        <form>
                                            <p>Username</p>
                                            <Input
                                                value={this.state.username}
                                                onChange={this.handleInputChange}
                                                name="username"
                                                placeholder="Enter Your Username"
                                            />

                                            <p>Password</p>
                                            <PasswordInput
                                                value={this.state.password}
                                                onChange={this.handleInputChange}
                                                name="password"
                                                placeholder="Enter Your Password"
                                            />
                                            <FormBtn onClick={this.handleFormSubmit} >
                                                Log In
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
        }

    }


    export default LogIn;
