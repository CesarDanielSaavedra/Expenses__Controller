import React from "react";
import "./ExpensesFilter.css";


const ExpensesFilter = (props) => {

    const changeSelectYearHandler = (event) => {
        props.onChangeYearFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">    
                <label for="select-year">Select year:</label>
                <select name="select-year" value={props.yearSelected} onChange={changeSelectYearHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;