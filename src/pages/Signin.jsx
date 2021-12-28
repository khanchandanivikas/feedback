import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/signin.css";

const Signin = () => {
  const animation = {
    hidden: { opacity: 0, translateY: "600px" },
    visible: {
      opacity: 1,
      translateY: "0px",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      className="signin-wrapper"
    >
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
          <h2>Sign-in To Your Account</h2>
          <label htmlFor="user">User Name</label>
          <p>Add a username</p>
          <input type="text" name="user" />
          <label htmlFor="contraseña">Password</label>
          <p>Include a password</p>
          <input type="password" name="contraseña" />
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <span>Sign-up</span>
            </Link>
          </p>
          <div>
            <button className="btn-cancel">Cancel</button>
            <button className="btn-add">Sign-in</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Signin;
