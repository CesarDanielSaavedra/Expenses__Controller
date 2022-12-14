import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ListItemFiltered.css";

const ListItemFiltered = (props) => {

  if (props.expenses.length === 0) {
    return ( 
      <h2 className="expenses-list__fallback"> No expenses found for this selected Year </h2>
    );
  }

  return (
    <ul className="expenses-list">
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
