import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    
      <ul className="users-list">
          {props.items.map(user=>(
              <UserItem 
              key={user.id}
              id={user.id}
              >
              {`${user.username} (${user.age} years old)`}
              </UserItem>
          ))}
 
      </ul>
  );
};

export default UserList;
