import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "점심",
    amount: 8000,
    date: new Date(2022, 6, 1),
  },
  {
    id: "e2",
    title: "새 옷",
    amount: 130000,
    date: new Date(2022, 6, 12),
  },
  {
    id: "e3",
    title: "군것질",
    amount: 1500,
    date: new Date(2022, 6, 1),
  },
  {
    id: "e4",
    title: "교통비",
    amount: 1200,
    date: new Date(2022, 6, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
