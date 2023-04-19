import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (probs) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    probs.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  const [isFormActive, setFormIsActive] = useState(false)

  const isFormActiveHandler = () =>{
    setFormIsActive(!isFormActive)
  }

  return (

    <div className="new-expense">
      {!isFormActive && (
        <button onClick={isFormActiveHandler}>Add New Expense</button>
      )}
      {isFormActive && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={isFormActiveHandler} />
      )}
      
    </div>
  );
};

export default NewExpense;
