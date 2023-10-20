import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: 'e1',
       title: 'Car Insurance', 
    amount: 294.68,
    date: new Date(2021, 2, 28)
    },
    {
      id: 'e2',
      title: 'Some books',
      amount: 310.56,
      date: new Date(2021, 3, 16)
    }, 
    {
      id: 'e3',
      title: 'Toilet Paper',
      amount: 210.17,
      date: new  Date(2020, 6, 10)
    },
    {
      id: 'e4',
      title: 'New TV',
      amount: 120.65,
      date: new Date(2018, 8, 20)
    }
   
  ]

  // return React.createElenment(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started"), 
  //   React.createElement(Expenses, {item: expenses})
  // );
  return (
    <div>
        <NewExpense />
        <Expenses item={expenses}/>
    </div>
  ); 
}

export default App;
