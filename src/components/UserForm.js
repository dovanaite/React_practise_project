import React, { useState } from "react";
import InvalidInput from "./Messages/InvalidInput";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

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

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValidUsername(false);
      setIsValidAge(false);
      return console.log("no input");
    }

    if (enteredAge < 0) {
      setIsValidAge(false);
      return console.log("negative age");
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onSaveUserData(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };


 

  return (
    <div>
      {!isValidUsername || !isValidAge ? (
        <div>
         <InvalidInput/>
          <div className="blur_background">
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
      ) : (
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
      )}
    </div>
  );
};

export default UserForm;
