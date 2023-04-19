import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const [cancel, setCancel] = useState(true);

    const onCancelHandler = () => {
        setCancel(!cancel);
    }

    if (cancel) {
        return (<div className='new-expense'>
            <button onClick={onCancelHandler}>New Expense</button>
        </div>
        );
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancelHandler={onCancelHandler} />
        </div>
    );
}
export default NewExpense;