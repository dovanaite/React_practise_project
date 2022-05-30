import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    {
      username: "test test",
      age: "15",
      id: Math.random().toString(),
    },
    {
      username: "test2 test2",
      age: "20",
      id: Math.random().toString(),
    },
  ]);

  const addUserHandler = (userInfo) => {
    setUsers((prevUsers) => {
      
      return [userInfo,...prevUsers];
    });
  };

  return (
    <div>
      <UserForm onSaveUserData={addUserHandler} />
      <UserList items={users} />
    </div>
  );
}

export default App;
