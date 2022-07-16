import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  
    const row = [];

    for (let index = 0; index < props.data.length; index++) {
        row.push(
            <ExpenseItem
            title={props.data[index].title}
            amount={props.data[index].amount}
            date={props.data[index].date}
            >
            </ExpenseItem>
        );
    }
    console.log(row);

    return (
        <div  className="expenses">{row}</div>
  );
}

export default Expense;
