import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses({ expenses }) {

    const [year, setYear] = useState('2019');
    const onSelectYearHandler = yearSelected => {
        setYear(yearSelected);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onSelectYear={onSelectYearHandler} />
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    );
}

export default Expenses;