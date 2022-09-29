import React from "react";
import UserModal from "../UserModal/UserModal";

function List({ item }) {
  let logInName = item.login[0].toUpperCase() + item.login.slice(1);
  let avatar = item.avatar_url;

  const doFetch = async (user) => {
    console.log(user.login);
    const response = await fetch(`https://api.github.com/users/${user.login}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      let data = await response.json();
      console.log(data);
      <UserModal user={data} isOpen={true} />;
    }
  };

  return (
    <li className="card" onClick={() => doFetch(item)}>
      <p className="userName">{logInName}</p>
      <img src={avatar} className="avatar" alt="avatar" />
    </li>
  );
}

export default List;
