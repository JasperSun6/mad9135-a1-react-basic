import React from "react";
import List from "../List/List";

function Main({ user, openModal, setSelectedUser }) {
  if (user.length === 0) {
    return (
      <p className="welcome">
        Welcome!
        <br />
        Please search a user name.
        <br />
        Click each user card to see more details.{" "}
      </p>
    );
  } else {
    return (
      <div>
        <p className="welcome">Search Results</p>
        <ul>
          {user.map((item) => (
            <List
              key={item.login}
              item={item}
              openModal={openModal}
              setSelectedUser={setSelectedUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
