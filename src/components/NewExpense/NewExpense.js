import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
