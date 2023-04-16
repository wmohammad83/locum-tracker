import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

import WorkedTable from "../components/WorkedTable";

function Worked() {
  let [locumWorked, setLocumWorked] = useState([]);

  useEffect(() => {
    const url = "http://localhost:1337/api/locum-days";
    axios
      .get(url)
      .then(function (response) {
        // console.log(response.data.data)
        setLocumWorked((locumWorked = response.data.data));
        console.log(locumWorked);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <h2 className="mb-4">Worked Days</h2>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Optician</th>
                <th>Location</th>
                <th>Miles</th>
                <th>Parking</th>
                <th>Day Rate</th>
              </tr>
            </thead>
            <tbody>
              {locumWorked.map((locumday) => (
                <WorkedTable key={locumday._id} locumday={locumday} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Worked;
