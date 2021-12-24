import React from "react";
import { Link } from "react-router-dom";
import "../style/signin.css";

const Signin = () => {
  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <div className="back">
          <Link to="/">
            <p>
              <i className="fas fa-chevron-left"></i>Go Back
            </p>
          </Link>
        </div>
        <form action="" className="signin-form">
          <h1>+</h1>
          <h2>Signin To Your Account</h2>
          <label htmlFor="name">Name</label>
          <p>Add a name</p>
          <input type="text" name="title" />
          <label htmlFor="user">User Name</label>
          <p>Add a username</p>
          <input type="text" name="user" />
          <label htmlFor="contraseña">Password</label>
          <p>Include a password</p>
          <input type="password" name="contraseña" />
          <label htmlFor="picture">Avatar</label>
          <p>Upload an avatar</p>
          <input type="file" name="picture" />
          <div>
            <button className="btn-cancel">Cancel</button>
            <button className="btn-add">Signin</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
