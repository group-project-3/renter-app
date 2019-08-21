import React from "react";
import { Input, EmailInput, PasswordInput, FormBtn, LocationInput } from "../../components/Form/Form";
import "./style.css"

export default function(props) {

    return (
        <div className="register-background">
                                <h1>Register a New Account</h1>
                                <br></br>
                                <form>


                                    <p>First Name</p>
                                    <Input
                                        value={props.state.first_name}
                                        onChange={props.handleInputChange}
                                        name="first_name"
                                        placeholder="Please Enter Your First Name"
                                    />

                                    <p>Last Name</p>
                                    <Input
                                        value={props.state.last_name}
                                        onChange={props.handleInputChange}
                                        name="last_name"
                                        placeholder="Please Enter Your Last Name"
                                    />

                                    <p>Email</p>
                                    <EmailInput
                                        value={props.state.email_address}
                                        onChange={props.handleInputChange}
                                        name="email_address"
                                        placeholder="Please Enter Your Email Address"
                                    />

                                    <p>Username</p>
                                    <Input
                                        value={props.state.username}
                                        onChange={props.handleInputChange}
                                        name="username"
                                        placeholder="Create a Username"
                                    />

                                    <p>Password</p>
                                    <PasswordInput
                                        value={props.state.password}
                                        onChange={props.handleInputChange}
                                        name="password"
                                        placeholder="Please Enter a Password"
                                    />

                                    <p>Confirm Password</p>
                                    <PasswordInput
                                        value={props.state.password_confirm}
                                        onChange={props.handleInputChange}
                                        name="password_confirm"
                                        placeholder="Please Confirm Your Password"
                                    />

                                    <LocationInput
                                        value={props.state.location}
                                        onChange={props.handleInputChange}
                                        name="location"
                                        placeholder="Select location"
                                    />
                                    <FormBtn onClick={props.handleFormSubmit}>
                                        Register
                                    </FormBtn>
                                </form>
        </div>
    )
}