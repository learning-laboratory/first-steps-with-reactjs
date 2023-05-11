import React, { useRef, useState } from "react"
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {

    const usernameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();


    const submitHandler = (event) => {
        event.preventDefault();

        const username = usernameInputRef.current.value;
        const age = +(ageInputRef.current.value);

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
        usernameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    return (
        <Wrapper>
            {error &&
                <ErrorModal title={error['title']} message={error['message']} onClose={() => { setError(null) }} />
            }
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type='text' id='username' name='username' ref={usernameInputRef} />
                    </div>
                    <div>
                        <label htmlFor="age">Age(yeard)</label>
                        <input type='number' id='age' name='age' ref={ageInputRef} />
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}


export default AddUser;