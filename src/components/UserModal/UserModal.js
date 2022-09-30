import React from "react";

function UserModal({ closeModal, selectedUser }) {
  console.log(selectedUser);
  let followers = selectedUser.followers;
  let following = selectedUser.following;

  return (
    <div className="modal">
      <div className="userDetail">
        <p className="userName">{selectedUser.login}</p>
        <img src={selectedUser.avatar_url} className="avatar" alt="avatar" />
        <div className="follow">
          <p className="followers">Followers: {followers}</p>
          <p className="following">Following: {following}</p>
        </div>
        <button className="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default UserModal;
