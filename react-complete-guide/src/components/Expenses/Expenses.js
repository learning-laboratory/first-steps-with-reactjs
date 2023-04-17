import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses({ expenses }) {

    const [year, setYear] = useState('2023');
    const onSelectYearHandler = yearSelected => {
        setYear(yearSelected);
    }

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === year);

    let expenseContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onSelectYear={onSelectYearHandler} />
            {expenseContent}
        </Card>
    );
}

export default Expenses;
