import React from "react";
import "../style/profile.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = (props) => {
  let history = useHistory();
  const gestionarLogout = props.gestionarLogout;
  const datos = props.datos;
  const loggedIn = props.loggedIn;
  const deleteUser = props.deleteUser;

  const toggleProfileModal = () => {
    if (loggedIn) {
      Swal.fire({
        title: "Logged in as:",
        text: "@" + datos.userName,
        imageUrl: datos.avatar,
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "profile image",
        showCancelButton: true,
        cancelButtonText: "Ok",
        cancelButtonColor: "#4158D0",
        confirmButtonColor: "#d73737",
        confirmButtonText: "Delete Account",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteUser();
        }
      });
    } else {
      history.push("/signin");
    }
  };
  return (
    <div className="profile-box">
      <div>
        <i onClick={toggleProfileModal} className="fas fa-user"></i>
        {loggedIn ? (
          <i onClick={gestionarLogout} className="fas fa-sign-out-alt"></i>
        ) : null}
      </div>
      <div>
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>
    </div>
  );
};

export default Profile;
