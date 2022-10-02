import React from "react";
import ExpenseItem from "./ExpenseItem";

const ListItemFiltered = (props) => {

  // props.filteredExpenses = filteredExpenses
  if (props.expenses.length === 0) {
    return ( 
      <h2> No expenses found for this selected Year </h2>
    );
  }

  return (
    <ul>
      {props.expenses.map( (expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ListItemFiltered;
