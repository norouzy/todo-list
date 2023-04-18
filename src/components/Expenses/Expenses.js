import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'

import "./Expenses.css";
import { useState } from "react";
const Expenses = (probs) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
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
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
