import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import cogoToast from "cogo-toast";
import "../style/editFeedback.css";

const EditFeedback = (props) => {
  let history = useHistory();
  const feedbackSelectedInfo = props.feedbackSelectedInfo;
  const getAllFeedbacks = props.getAllFeedbacks;
  const feedbackIdSelected = props.feedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  const [title, setTitle] = useState(feedbackSelectedInfo.title);
  const [category, setCategory] = useState(feedbackSelectedInfo.category);
  const [status, setStatus] = useState(feedbackSelectedInfo.status);
  const [details, setDetails] = useState(feedbackSelectedInfo.details);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleDetails = (e) => {
    setDetails(e.target.value);
  };

  const editFeedback = async (e) => {
    e.preventDefault();
    await axios
      .patch(
        process.env.REACT_APP_BACKEND_URL +
          `/api/feedback/${feedbackIdSelected}`,
        {
          title: title,
          category: category,
          details: details,
          status: status,
        }
      )
      .then((response) => {
        console.log(response);
        setFeedbackInfoSelected(response.data.feedback);
        localStorage.setItem(
          "feedbackInfo",
          JSON.stringify({
            title: response.data.feedback.title,
            details: response.data.feedback.details,
            votes: response.data.feedback.votes,
            category: response.data.feedback.category,
            comments: response.data.feedback.comments,
            status: response.data.feedback.status,
          })
        );
        getAllFeedbacks("");
        history.push("/comments");
        cogoToast.success("Feedback Edited");
      })
      .catch((error) => {
        console.log(error);
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
      className="editFeedback-wrapper"
    >
      <div className="editFeedback-container">
        <div className="back">
          <Link to="/comments">
            <p>
              <i className="fas fa-chevron-left"></i>Go Back
            </p>
          </Link>
        </div>
        <form action="" onSubmit={editFeedback} className="editFeedback-form">
          <h1>
            <i className="fas fa-pen-nib"></i>
          </h1>
          <h2>Editing 'Add tags for solutions'</h2>
          <label htmlFor="title">Feedback Title</label>
          <p>Add a short, descriptive headline</p>
          <input
            value={title}
            onChange={handleTitle}
            type="text"
            name="title"
          />
          <label htmlFor="category">Category</label>
          <p>Choose a category for your feedback</p>
          <select value={category} onChange={handleCategory} name="category">
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
          </select>
          <label htmlFor="status">Update Status</label>
          <p>Change feature state</p>
          <select value={status} onChange={handleStatus} name="status">
            <option value="planned">Planned</option>
            <option value="in-progress">In-Progress</option>
            <option value="live">Live</option>
          </select>
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
          ></textarea>
          <div className="buttons">
            <button className="btn-delete">Delete</button>
            <div>
              <button
                onClick={() => history.push("/comments")}
                className="btn-cancel"
              >
                Cancel
              </button>
              <button className="btn-add">Edit Feedback</button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default EditFeedback;
