import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

function InvoiceTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Invoice #</th>
          <th>Optician</th>
          <th>Amount</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Instore</td>
          <td>£400</td>
          <td>
            <Badge bg="success">Paid</Badge>
          </td>
          <td>View</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Specsavers</td>
          <td>£260</td>
          <td>
            <Badge bg="warning">Due</Badge>
          </td>
          <td>View</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Instore</td>
          <td>£300</td>
          <td>
            <Badge bg="danger">Overdue</Badge>
          </td>
          <td>View</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default InvoiceTable;
