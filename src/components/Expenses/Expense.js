import React from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expense = (props) => {
  const row = [];

  for (let index = 0; index < props.data.length; index++) {
    row.push(
      <ExpenseItem
        title={props.data[index].title}
        amount={props.data[index].amount}
        date={props.data[index].date}
      ></ExpenseItem>
    );
  }

  return <Card className="expenses">{row}</Card>;
}

export default Expense;
