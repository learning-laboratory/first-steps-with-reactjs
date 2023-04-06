import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    {
      id: "e1",
      title: "Mazda",
      amount: 592.23,
      date: new Date(2021, 8, 15)
    },
    {
      id: "e2",
      title: "BMW",
      amount: 392.23,
      date: new Date(2021, 2, 12)
    },
    {
      id: "e3",
      title: "Tata",
      amount: 921.23,
      date: new Date(2021, 5, 25)
    }
  ];

  return React.createElement(
    'div', {},
    React.createElement(NewExpense),
    React.createElement(Expenses, { expenses: expenses })
  );
  // return (
  //   <div className="App">
  //     <NewExpense/>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );
}

export default App;
