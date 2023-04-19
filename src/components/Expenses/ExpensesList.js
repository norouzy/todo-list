import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (probs) =>{
    let expensesContent = <p>No expenses found.</p>;

    if(probs.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    // expensesContent = probs.items.map((expense)=>(
    //     <ExpenseItem
    //       key={expense.id}
    //       title={expense.title}
    //       amount={expense.amount}
    //       date={expense.date}
    //     />
    // ));

    return (
        <ul className="expenses-list">
            {probs.items.map((expense)=>(
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );

}
export default ExpensesList;