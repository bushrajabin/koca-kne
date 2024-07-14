import React from "react";

const Profile = ({ userData, Logout }) => (
  <div className="wrapper">
    <div className="profile-card js-profile-card">
      <div className="profile-card__cnt js-profile-cnt">
        <div className="profile-card__name">{userData.displayName}</div>
        <div className="profile-card__txt">{userData.email}</div>
        <div className="profile-card-loc"></div>
        <div className="profile-card-ctr">
          <button
            className="profile-card__button button--orange"
            onClick={Logout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
