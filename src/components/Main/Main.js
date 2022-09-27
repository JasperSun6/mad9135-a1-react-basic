import React from "react";
import List from "../List/List";

function Main({ user }) {
  if (user.length === 0) {
    return <p>Welcome! Please enter a user name</p>;
  } else {
    return (
      <ul>
        {user.user.map((item) => (
          <List key={item.login} item={item} />
        ))}
      </ul>
    );
  }
}

export default Main;
