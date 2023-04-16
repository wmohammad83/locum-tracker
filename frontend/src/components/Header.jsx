import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "./style.css";

function Header({ totalIncome }) {
  // SHOW LOCUM MODAL
  const [showLocumLog, setShowLocumLog] = useState(false);
  const handleLocumLogClose = () => setShowLocumLog(false);
  const handleLocumLogShow = () => setShowLocumLog(true);

  // SHOW EXPENSE MODAL
  const [showExpenseLog, setshowExpenseLog] = useState(false);
  const handleshowExpenseLogClose = () => setshowExpenseLog(false);
  const handleshowExpenseLogShow = () => setshowExpenseLog(true);

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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Enter date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="email" placeholder="Enter optician" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control type="email" placeholder="Enter location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Miles</Form.Label>
              <Form.Control type="number" placeholder="Enter optician" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Parking</Form.Label>
              <Form.Control type="number" placeholder="Parking" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Daily Rate (£)</Form.Label>
              <Form.Control type="number" placeholder="Enter optician" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLocumLogClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLocumLogClose}>
            Save Changes
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
