import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredAge, setEnteredAge] = useState("");
  const [enteredAgeTouched, setEnteredAgeTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredAgeIsValid = enteredAge.trim() !== "";
  const ageInputIsInvalid = !enteredAgeIsValid && enteredAgeTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredAgeIsValid) formIsValid = true;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const ageInputBlurHandler = (event) => {
    setEnteredAgeTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredAgeTouched(true);

    if (!enteredNameIsValid || !enteredAgeIsValid) return;

    console.log(enteredName);
    console.log(enteredAge);

    setEnteredNameTouched(false);
    setEnteredAgeTouched(false);
    
    setEnteredName("");
    setEnteredAge("");

    // nameInputRef.current.value = ""; // Not ideal, don't manipulate dom
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const ageInputClasses = ageInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p>Name must not be empty.</p>}
      </div>

      <div className={ageInputClasses}>
        <label htmlFor="age">Your Age:</label>
        <input
          type="number"
          id="age"
          onChange={ageInputChangeHandler}
          onBlur={ageInputBlurHandler}
          value={enteredAge}
        />
        {ageInputIsInvalid && <p>Age must not be empty.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
