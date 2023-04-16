import { useState, useEffect } from "react";
import axios from "axios";
// import NavBar from "../components/Navbar/Navbar";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InvoiceCard from "../components/Card";
import InvoiceTable from "../components/InvoiceTable";

function Dashboard() {
  // const [locumDays, setLocumDats] = useState({});
  let [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const url = "http://localhost:1337/api/locum-days";
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data.data.length);
        setTotalIncome((totalIncome = 0));

        for (let i = 0; i < response.data.data.length; i++) {
          setTotalIncome(
            (totalIncome = totalIncome + response.data.data[i].attributes.rate)
          );
          console.log(totalIncome);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header totalIncome={totalIncome} />

      <Container className="mt-4">
        <h3 className="mb-4">Recent Invoice</h3>
        <Row>
          <Col>
            <InvoiceCard optician="Instore" amount={400} month="January 2023" />
          </Col>
          <Col>
            <InvoiceCard
              optician="Specsavers"
              amount={380}
              month="Febuary 2023"
            />
          </Col>
          <Col>
            <InvoiceCard optician="Instore" amount={500} month="March 2023" />
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row>
          <h3 className="mb-4">All Invoices</h3>
          <Col>
            <InvoiceTable />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
