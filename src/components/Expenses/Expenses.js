import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import { useState } from "react";
const Expenses = (probs) => {
  
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = probs.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No expenses found.</p>;
  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense)=>(
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      {/* third filtered */}
      {/* {expensesContent} */}

      {/* first way of filtered */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))} */}

      {/* second way of filtered */}

      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))
      )}
       */}

      {/* {
        probs.items.map((expense)=>(
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      } */}

      {/* <ExpenseItem
        title={probs.items[0].title}
        amount={probs.items[0].amount}
        date={probs.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={probs.items[1].title}
        amount={probs.items[1].amount}
        date={probs.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={probs.items[2].title}
        amount={probs.items[2].amount}
        date={probs.items[2].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
