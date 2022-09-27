import React from "react";

function List({ item }) {
  let logInName = item.login;
  let avatar = item.avatar_url;

  return (
    (<li>{`login Name: ${logInName}`}</li>), (<li>{`Avatar: ${avatar}`}</li>)
  );
}

export default List;
