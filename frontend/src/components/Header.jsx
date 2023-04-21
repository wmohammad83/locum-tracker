import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWork, reset } from "../features/work/workSlice";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../components/Spinner";
// import "./style.css";

function Header({ totalIncome }) {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.work
  );

  // SHOW LOCUM MODAL
  const [showLocumLog, setShowLocumLog] = useState(false);
  const handleLocumLogClose = () => setShowLocumLog(false);
  const handleLocumLogShow = () => setShowLocumLog(true);

  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [miles, setMiles] = useState(0);
  const [parking, setParking] = useState(0);
  const [rate, setRate] = useState(0);

  // SHOW EXPENSE MODAL
  const [showExpenseLog, setshowExpenseLog] = useState(false);
  const handleshowExpenseLogClose = () => setshowExpenseLog(false);
  const handleshowExpenseLogShow = () => setshowExpenseLog(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/worked");
    }
    dispatch(reset());
  }, [dispatch, isSuccess, isError, message, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createWork({ date, company, location, miles, parking, rate }));
    console.log("hello");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="header">
      <Container>
        <Row>
          <Col>
            <div className="header-text mt-4">
              <p className="reset">Total Income</p>
              <h1 className="reset display-4">£{totalIncome}</h1>
              <p className="ml-4">2022-23</p>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <div className="btn-layout">
              <Button onClick={handleLocumLogShow} className="head-btn mt-3">
                Log Work
              </Button>
              <Button
                onClick={handleshowExpenseLogShow}
                className="head-btn mt-2"
              >
                Log Expense
              </Button>
              <Button className="head-btn mt-2">New Invoice</Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* LOG LOCUM WORK */}
      <Modal show={showLocumLog} onHide={handleLocumLogClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter optician"
                name="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Miles</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Miles"
                name="miles"
                id="miles"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Parking</Form.Label>
              <Form.Control
                type="number"
                placeholder="Parking"
                id="parking"
                name="parking"
                value={parking}
                onChange={(e) => setParking(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Daily Rate (£)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Daily Rate"
                name="rate"
                id="rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              // onClick={handleLocumLogClose}
            >
              Add Work
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleLocumLogClose}>
            Close
          </Button> */}
          <Button variant="primary" type="submit" onClick={handleLocumLogClose}>
            Add Work
          </Button>
        </Modal.Footer>
      </Modal>

      {/* LOG EXPENSES */}
      <Modal show={showExpenseLog} onHide={handleshowExpenseLogClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Enter date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Details</Form.Label>
              <Form.Control type="email" placeholder="Expense details" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount (£)</Form.Label>
              <Form.Control type="number" placeholder="Enter Amount" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleshowExpenseLogClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleshowExpenseLogClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
