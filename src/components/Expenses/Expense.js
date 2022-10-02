import React, {useState} from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
 
  const expenses = props.data;

  console.log(expenses);

  const [selectedFilterYear, setSelectedFilterYear] = useState("2021");

  const changeYearFilterHandler = (year) => {

    setSelectedFilterYear(year);

  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  return (<Card className="expenses">

    <ExpensesFilter onChangeYearFilter={changeYearFilterHandler} yearSelected={selectedFilterYear}/>

    {/*this is the funtionality (map method) to reproduce in a new comp*/}
    {filteredExpenses.map( (expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          ></ExpenseItem>
        );
      })
    }
  </Card>

  );
}

export default Expense;
