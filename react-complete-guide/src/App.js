import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {

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

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
