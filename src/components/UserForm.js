import React, { useState } from "react";
import './UserForm.css';

const UserForm=(props)=>{

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value)
        console.log(event.target.value)
    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value)
        console.log(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            username: enteredUsername,
            age: enteredAge,
          };

        props.onSaveUserData(userData);
        setEnteredUsername('');
        setEnteredAge('');

    }


return <div>
   <form className='user-form' onSubmit={submitHandler}>
   <div className="user-form__controls">
       <div className="user-form__control">
           <label>Username</label>
           <input type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
       </div>
   </div>
   <div className="user-form__controls">
       <div className="user-form__control">
           <label>Age(Years)</label>
           <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
       </div>
   </div>
   <div className="user-form__actions">
   <button type="submit">Add User</button>
    </div>
   </form>
   </div>

}

export default UserForm;