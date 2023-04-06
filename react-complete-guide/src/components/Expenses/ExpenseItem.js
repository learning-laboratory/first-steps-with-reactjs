import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import React, { useState } from 'react';
import Card from '../UI/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [date, setDate] = useState(props.date);

    const clickHandler = () => {
        setTitle("Clicked");
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button onClick={clickHandler}>Edit</button>
        </Card>
    );
}

export default ExpenseItem;