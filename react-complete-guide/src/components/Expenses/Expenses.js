import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ expenses }) {

    const [year, setYear] = useState('2023');
    const onSelectYearHandler = yearSelected => {
        setYear(yearSelected);
    }

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === year);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onSelectYear={onSelectYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );

}

export default Expenses;
