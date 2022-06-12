import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.getFullYear("ko-KR", { year: "numeric" });
  const month = props.date.toLocaleString("ko-KR", { month: "numeric" }); // 월은 기본적으로 0 - 11 로 표현됨.
  const day = props.date.toLocaleString("ko-KR", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
