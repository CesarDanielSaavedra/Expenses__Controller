import React, {useState} from "react";
import "./Expense.css";
//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ListItemFiltered from "./ListItemFiltered";

const Expense = (props) => {
 
  const expenses = props.data;

  const [selectedFilterYear, setSelectedFilterYear] = useState("2021");

  const changeYearFilterHandler = (year) => {
    setSelectedFilterYear(year);
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  return (<Card className="expenses">

    <ExpensesFilter onChangeYearFilter={changeYearFilterHandler} yearSelected={selectedFilterYear}/>
    <ListItemFiltered expenses={filteredExpenses} />
  </Card>

  );
}

export default Expense;
