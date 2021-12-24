import React from "react";
import { Link } from "react-router-dom";
import "../style/profile.css";

const Profile = () => {
  return (
    <div className="profile-box">
      <div>
        <Link to="/signin">
          <i className="fas fa-user"></i>
        </Link>
        <i className="fas fa-sign-out-alt"></i>
      </div>
      <div>
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>
    </div>
  );
};

export default Profile;
