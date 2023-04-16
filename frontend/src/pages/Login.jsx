import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { FaUser, FaSignInAlt } from "react-icons/fa";

function Login() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Destructuing
  const { username, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="text-center log-card">
      {/* <Container>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Ooops Password Dont Match</Alert.Heading>
        </Alert>
      </Container> */}

      <Card className="m-auto" style={{ width: "20rem" }}>
        <Card.Body>
          <h4 className="mb-4 logo-end">
            {" "}
            <FaSignInAlt /> Login
          </h4>
          <p>Please login to your account</p>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                value={username}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
