import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import cogoToast from "cogo-toast";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/addFeedback.css";

const AddFeedback = (props) => {
  const [details, setDetails] = useState("");
  const handleDetails = (e) => {
    setDetails(e.target.value);
  };
  const loggedIn = props.loggedIn;
  const getAllFeedbacks = props.getAllFeedbacks;
  const getPlannedFeedbacks = props.getPlannedFeedbacks;
  const getProgressFeedbacks = props.getProgressFeedbacks;
  const getLiveFeedbacks = props.getLiveFeedbacks;
  const datos = props.datos;
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (loggedIn) {
      await axios
        .post(process.env.REACT_APP_BACKEND_URL + "/api/feedback/", {
          title: data.title,
          category: data.category,
          details: details,
          creator: datos.userId,
        })
        .then((response) => {
          console.log(response);
          getAllFeedbacks("");
          getPlannedFeedbacks();
          getProgressFeedbacks();
          getLiveFeedbacks();
          history.push("/");
          cogoToast.success("Feedback Created");
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Not Logged",
        text: "You must be logged in to post a feedback",
        confirmButtonColor: "#4661e6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
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
      className="addFeedback-wrapper"
    >
      <div className="addFeedback-container">
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
          className="addFeedback-form"
        >
          <h1>+</h1>
          <h2>Create New Feedback</h2>
          <label htmlFor="title">Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input
            type="text"
            name="title"
            {...register("title", { required: true })}
          />
          {errors.title && errors.title.type === "required" && (
            <span>Title Required</span>
          )}
          <label htmlFor="category">Category</label>
          <p>Choose a category for your feedback</p>
          <select name="category" {...register("category", { required: true })}>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>
          {errors.category && errors.category.type === "required" && (
            <span>Category Required</span>
          )}
          <label htmlFor="details">Feedback Details</label>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            value={details}
            onChange={handleDetails}
            cols="30"
            rows="10"
            required
          ></textarea>
          <div>
            <button onClick={() => history.push("/")} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-add">
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddFeedback;
