import React, {useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e412",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e3242",
    title: "Car Insurance",
    amount: 132.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e124",
    title: "New Desk (Wooden)",
    amount: 12313,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const newExpenseAddedHandler = (newExpenseAdded) => {

    setExpenses( (prevExpenses) => {
      return (
        [newExpenseAdded, ...prevExpenses]
      );
    });

  }

  return (
    <div>
      <h1> Expenses Controller </h1>
      <NewExpenses onNewExpenseAdded={newExpenseAddedHandler}/>
      <Expense data={expenses}></Expense>
    </div>
  );
}

export default App;
