import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (probs) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };
  // const AmountChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  // };
  // const DateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });
  // };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    probs.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            step="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
        <button onClick={probs.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
