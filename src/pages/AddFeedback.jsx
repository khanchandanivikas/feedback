import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../style/addFeedback.css";

const AddFeedback = () => {
  const animation = {
    hidden: { opacity: 0, translateY: "600px" },
    visible: {
      opacity: 1,
      translateY: "0px",
      transition: {
        duration: 0.3,
      },
    }
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
        <form action="" className="addFeedback-form">
          <h1>+</h1>
          <h2>Create New Feedback</h2>
          <label htmlFor="title">Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input type="text" name="title" />
          <label htmlFor="category">Category</label>
          <p>Choose a category for your feedback</p>
          <select name="category">
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>
          <label htmlFor="details">Feedback Details</label>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea cols="30" rows="10"></textarea>
          <div>
            <button className="btn-cancel">Cancel</button>
            <button className="btn-add">Add Feedback</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddFeedback;
