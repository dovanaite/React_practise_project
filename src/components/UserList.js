import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
    
  return (
      <li className="users-list">
          {props.items.map(user=>(
              <UserItem 
              key={user.id}
              id={user.id}
              >
              {`${user.username} (${user.age} years old)`}
              </UserItem>
          ))}
 
      </li>
  );
};

export default UserList;
