import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/signin.css";
import cogoToast from "cogo-toast";
import Swal from "sweetalert2";

const Signin = (props) => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gestionarAcceso = props.gestionarAcceso;

  const onSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/user/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        gestionarAcceso(response.data);
        history.push("/");
        cogoToast.success("Login successful");
      })
      .catch((error) => {
        console.log(error.response.data);
        Swal.fire({
          icon: "error",
          title: "Validation error",
          text: "Please check the datas",
        });
      });
  };

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
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="signin-form"
        >
          <h1>+</h1>
          <h2>Sign-in To Your Account</h2>
          <label htmlFor="user">User Name</label>
          <p>Add an e-mail</p>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span>E-mail Required</span>
          )}
          <label htmlFor="contraseña">Password</label>
          <p>Include a password</p>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <span>Password Required</span>
          )}
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <span>Sign-up</span>
            </Link>
          </p>
          <div>
            <button onClick={() => history.push("/")} className="btn-cancel">
              Cancel
            </button>
            <button className="btn-add" type="submit">
              Sign-in
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Signin;
