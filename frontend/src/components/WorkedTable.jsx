import Table from "react-bootstrap/Table";

function WorkedTable({ locumday }) {
  return (
    <tr>
      <td>{locumday.attributes.date}</td>
      <td className="text-capitalize">{locumday.attributes.optician}</td>
      <td className="text-capitalize">{locumday.attributes.location}</td>
      <td>{locumday.attributes.miles}</td>
      <td>£{locumday.attributes.parking}</td>
      <td>£{locumday.attributes.rate}</td>
    </tr>
  );
}

export default WorkedTable;
