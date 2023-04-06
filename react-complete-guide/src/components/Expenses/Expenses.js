import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import React from 'react';
import Card from '../UI/Card';

function Expenses({ expenses }) {
    return (
        <Card  className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </Card>
    );
}

export default Expenses;