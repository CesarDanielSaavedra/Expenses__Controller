import React from "react";
import "./NewExpenses.css"
import ExpensesForm from "./ExpensesForm"

const NewExpenses = (props) => {

    const saveExpenseDataHandler = ( expenseDataSaved ) => {

        const newExpenseData = {
            ...expenseDataSaved,
            id : Math.random().toString()
        }

        props.onNewExpenseAdded(newExpenseData);
        //console.log("estamos en NewExpenses");
        //console.log(newExpenseData);
    }

    return(
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpenses;