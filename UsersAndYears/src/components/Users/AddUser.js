import React, { useState } from "react"
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (String(age).trim().length === 0 || username.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        //force converse using +variable_here
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }



        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    return (
        <>
            {error &&
                <ErrorModal title={error['title']} message={error['message']} onClose={() => { setError(null) }} />
            }
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type='text' id='username' name='username' value={username} onChange={usernameChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="age">Age(yeard)</label>
                        <input type='number' id='age' name='age' value={age} onChange={ageChangeHandler} />
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    );
}


export default AddUser;