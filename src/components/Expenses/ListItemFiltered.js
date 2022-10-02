import React from "react";
import ExpenseItem from "./ExpenseItem";

const ListItemFiltered = (props) => {

  // props.filteredExpenses = filteredExpenses

  return (
    <ul>
      {props.expenses.map( (expense) => {
        return (<ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        ></ExpenseItem>
        );
        })}
    </ul>
  );
}

export default ListItemFiltered;
