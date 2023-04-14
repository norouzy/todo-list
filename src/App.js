import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Tiolet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.12,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return <Expenses items={expenses}></Expenses>;
}

export default App;
