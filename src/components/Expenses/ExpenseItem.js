import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (probs) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <Card className="expense-item">
      <ExpenseDate date={probs.date} />
      <div className="expense-item__description">
        <h2>{probs.title}</h2>
        <div className="expense-item__price">${probs.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
