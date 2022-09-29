import React, { useState, useEffect } from "react";
import UserModal from "../UserModal/UserModal";

function UserDetail() {
  const [user, setUser] = useState([]);

  const doFetch = async (user) => {
    console.log(user);
    const response = await fetch(`https://api.github.com/users/${user.login}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      let data = await response.json();
      setUser(data);
    }
  };
  return <div className="userDetail">onclick={() => doFetch(user)}</div>;
}

export default UserDetail;
