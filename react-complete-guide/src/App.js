import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Mazda",
    amount: 592.23,
    date: new Date(2023, 8, 15)
  },
  {
    id: "e2",
    title: "BMW",
    amount: 392.23,
    date: new Date(2023, 2, 12)
  },
  {
    id: "e3",
    title: "Tata",
    amount: 921.23,
    date: new Date(2021, 5, 25)
  },
  {
    id: "e4",
    title: "Toyota",
    amount: 491.23,
    date: new Date(2021, 5, 25)
  },
  {
    id: "e5",
    title: "Ferrari",
    amount: 658.23,
    date: new Date(2020, 5, 25)
  },
  {
    id: "e6",
    title: "Benz",
    amount: 721.23,
    date: new Date(2019, 5, 25)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return React.createElement(
    'div', {},
    React.createElement(NewExpense, { onAddExpense: addExpenseHandler }),
    React.createElement(Expenses, { expenses: expenses })
  );

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} o />
    </div>
  );

}

export default App;
