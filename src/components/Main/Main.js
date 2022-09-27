import React from "react";
import List from "../List/List";
import UserDetail from "../UserModal/UserModal";

function Main({ user }) {
  if (user.length === 0) {
    return <p className="welcome">Welcome! Please search a user name.</p>;
  } else {
    return (
      <ul>
        {user.map((item) => (
          <List key={item.login} item={item} />
        ))}
      </ul>
    );
  }
}

export default Main;
