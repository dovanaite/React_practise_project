import React, { useState } from "react";
import InvalidInput from "./UI/InvalidInput";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [errorModal, setErrorModal] = useState(null);

  const isValidUsername = enteredUsername.trim().length !== 0;
  const isValidAge = +enteredAge > 0;

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isNotValid = !isValidUsername || !isValidAge;
    setErrorModal(isNotValid);
    if (isNotValid) {
      return;
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onSaveUserData(userData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const cancelErrorHandler = () => {
    console.log("canceled");
    setErrorModal(null);
  };

  return (
    <div>
      {errorModal && <InvalidInput onCancel={cancelErrorHandler} />}
      <div>
        <form className="user-form" onSubmit={submitHandler}>
          <div className="user-form__controls">
            <div className="user-form__control">
              <label>Username</label>
              <input
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>
          </div>
          <div className="user-form__controls">
            <div className="user-form__control">
              <label>Age(Years)</label>
              <input
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
              />
            </div>
          </div>
          <div className="user-form__actions">
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
