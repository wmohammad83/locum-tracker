import React from "react";

function ExpenseTable({ expense }) {
  return (
    <tr>
      <td>{expense.attributes.date}</td>
      <td className="text-capitalize">{expense.attributes.details}</td>
      <td>£{expense.attributes.amount}</td>
    </tr>
  );
}

export default ExpenseTable;
