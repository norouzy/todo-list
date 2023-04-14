import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (probs) => {
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
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
