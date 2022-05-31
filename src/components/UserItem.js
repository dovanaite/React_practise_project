import React from "react";

import "./UserItem.css";

const UserItem = (props) => {


  return (
      <ul className="user-item">
      {props.children}
      </ul>
  );
};

export default UserItem;
