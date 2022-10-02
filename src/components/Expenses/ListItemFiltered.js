import React from react;

const ListItemFiltered = () => {

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
    
    return();

}

export default ListItemFiltered;
