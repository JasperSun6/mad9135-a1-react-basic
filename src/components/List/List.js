import React from "react";
import UserDetail from "../UserModal/UserModal";

function List({ item }) {
  let logInName = item.login[0].toUpperCase() + item.login.slice(1);
  let avatar = item.avatar_url;

  return (
    <li className="card" onClick={() => <UserDetail />}>
      <p className="userName">{logInName}</p>
      <img src={avatar} className="avatar" alt="avatar" />
    </li>
  );
}

export default List;
