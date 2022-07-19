import React from "react";
import "./ExpensesForm.css";

const ExpensesForm = () => {
    return (
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> 
                    <input type="text" />
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
