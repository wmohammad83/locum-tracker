import React from "react";
import Card from "react-bootstrap/Card";

function InvoiceCard({ optician, amount, month }) {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{optician}</Card.Text>
        <Card.Title>
          <h2>£{amount}</h2>
        </Card.Title>
        <Card.Text>{month}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">View Invoice</Card.Footer>
    </Card>
  );
}

export default InvoiceCard;
