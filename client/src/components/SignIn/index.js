import React, {Components} from "react";
import "./style.css";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';




function SignIn() {
    return (
  
<div className="sign-in">

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="normal" placeholder="Enter Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Sign-In
  </Button>
</Form>

</div>
  
    );
}

export default SignIn;