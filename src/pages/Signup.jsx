import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/signin.css";
import cogoToast from "cogo-toast";

const Signup = (props) => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gestionarAcceso = props.gestionarAcceso;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("userName", data.userName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("image", data.image[0]);
    await axios({
      method: "POST",
      url: process.env.REACT_APP_BACKEND_URL + "/api/user/",
      data: formData,
      headers: { "content-type": "multipart/form-data" },
    })
      .then((response) => {
        gestionarAcceso(response.data);
        history.push("/");
        cogoToast.success("Sign-up successful");
      })
      .catch((error) => {
        console.log(error.response.data);
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
          <Link to="/signin">
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
          <h2>Sign-up for a new account</h2>
          <label htmlFor="name">Name</label>
          <p>Add a name</p>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>Name Required</span>
          )}
          <label htmlFor="userName">User Name</label>
          <p>Add a username</p>
          <input
            type="text"
            name="userName"
            {...register("userName", { required: true })}
          />
          {errors.userName && errors.userName.type === "required" && (
            <span>User Name Required</span>
          )}
          <label htmlFor="email">E-mail</label>
          <p>Add an e-mail</p>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <span>E-mail Required</span>
          )}
          <label htmlFor="password">Password</label>
          <p>Include a password</p>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <span>Password Required</span>
          )}
          <label htmlFor="image">Avatar</label>
          <p>Upload an avatar</p>
          <input
            type="file"
            name="image"
            {...register("image", { required: true })}
          />
          {errors.image && errors.image.type === "required" && (
            <span>Image Required</span>
          )}
          <div>
            <button onClick={() => history.push("/")} className="btn-cancel">
              Cancel
            </button>
            <button className="btn-add" type="submit">
              Sign-up
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Signup;
