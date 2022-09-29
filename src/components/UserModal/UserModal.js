import React from "react";
import Modal from "react-modal";

function UserModal({ user }) {
  let followers = user.followers;
  let following = user.following;

  console.log(user);
  return (
    <Modal>
      <div className="userDetail">
        <p className="userName">{user.login}</p>
        <img src={user.avatar_url} className="avatar" alt="avatar" />
        <p className="followers">Followers: {followers}</p>
        <p className="following">Following: {following}</p>
        <button className="button">Close</button>
      </div>
    </Modal>
  );
}

export default UserModal;
