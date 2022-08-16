import React, {useState} from "react";
import "./ExpensesForm.css";



const ExpensesForm = () => {

    const [enteredTitle, setEnteredTitle] = ("");
    const [enteredamount, setEnteredAmount] = ("");
    const [enteredDate, setEnteredDate] = ("");


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    }

    return (
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> 
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label> 
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label> 
                    <input type="date" onChange={dateChangeHandler} />
                </div>
            </div>
        </form>            
        
    );
}

export default ExpensesForm;
