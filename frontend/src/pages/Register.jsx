import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner"

import { FaUser } from "react-icons/fa";

function Register() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    password2: "",
  });

  // Destructuing
  const { username, email, firstname, lastname, password, password2 } =
    formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      // displays the error message in the console, will change this to alert
      console.log(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setShow(true);
      console.log("passwords dont match");
    } else {
      const userData = {
        username,
        email,
        firstname,
        lastname,
        password,
      };
      dispatch(register(userData));
    }
  };

  if(isLoading){
    return <Spinner />
  }

  return (
    <div className="text-center log-card">
      {/* <Container>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Ooops Password Dont Match</Alert.Heading>
        </Alert>
      </Container> */}

      <Card className="shadow m-auto" style={{ width: "20rem" }}>
        <Card.Body>
          <h4 className="mb-4 logo-end">
            {" "}
            <FaUser /> Register
          </h4>
          <p>Please create an account</p>
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
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Firstname"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Lastname"
                id="lastname"
                name="lastname"
                value={lastname}
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
            <Form.Group className="mb-3">
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                id="password2"
                name="password2"
                value={password2}
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

export default Register;
