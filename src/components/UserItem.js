import React from "react";

import "./UserItem.css";

const UserItem = (props) => {


  return (
    <div>
    <li className="users">
      <ul className="user-item">
      {props.children}
      </ul>
    </li>
    </div>
  );
};

export default UserItem;
