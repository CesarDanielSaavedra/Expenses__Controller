import React from "react";
import "./ExpensesForm.css";

const ExpensesForm = () => {

    const titleChangeHandler = (event) => {
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
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label> 
                    <input type="date" />
                </div>
            </div>
        </form>            
        
    );
}

export default ExpensesForm;
