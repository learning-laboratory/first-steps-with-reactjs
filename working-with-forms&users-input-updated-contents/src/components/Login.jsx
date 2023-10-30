import {useRef, useState} from "react";

export default function Login() {

    const email = useRef();
    const password = useRef();
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        const emailIsValid = !enteredEmail.includes('@');
        if(!emailIsValid){
            setEmailIsInvalid(true);
            return;
        }
        setEmailIsInvalid(false);

        console.log("Submitted", enteredEmail, enteredPassword);
        // email.current.value = '';
        // password.current.value = '';
        // event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" ref={email}
                    />
                    {emailIsInvalid && <div className="control-error"> Required</div>}
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" ref={password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button type="button" className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
