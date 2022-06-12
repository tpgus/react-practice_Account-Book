import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
