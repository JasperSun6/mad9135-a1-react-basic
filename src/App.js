import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.js";

import UserModal from "./components/UserModal/UserModal";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    if (searchValue) {
      doFetch(searchValue);
    }
  }, [searchValue]); // do this when a search value change happens

  async function doFetch(searchValue) {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchValue}&per_page=5`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      let data = await response.json();
      setUser(data.items);
      console.log(data.items); // github users list
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault(); // prevents refreshing of the page after submitting
    setSearchValue(ev.target[0].value); // set search value after form submitted
    console.log(ev.target[0].value);
  }

  // runs with any change
  function handleChange(ev) {
    console.log("change value to: ", ev.target.value); // change value, good for auto-completing
  }

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Header />
      <form className="input" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          placeholder="User name"
          type="text"
          className="input"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <Main
        user={user}
        setSelectedUser={setSelectedUser}
        openModal={openModal}
      />
      {isOpen && (
        <UserModal selectedUser={selectedUser} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
