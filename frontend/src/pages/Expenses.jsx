import React, {useState, useEffect} from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExpenseTable from "../components/ExpenseTable";
import Table from "react-bootstrap/Table";

function Expenses() {
  let [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/expenses";
    axios
      .get(url)
      .then(function (response) {
        // console.log(response.data.data)
        setExpenses((expenses = response.data.data));
        console.log(expenses);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <h2 className="mb-4">Expenses</h2>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Details</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <ExpenseTable key={expense.id} expense={expense} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Expenses;
