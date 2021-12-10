import React from "react";
import { Link } from "react-router-dom";
import "../style/addFeedback.css";

const AddFeedback = () => {
  return (
    <div className="addFeedback-wrapper">
      <div className="addFeedback-container">
        <div className="back">
          <Link to="/">
            <p>
              <i class="fas fa-chevron-left"></i>Go Back
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
          <input type="text" name="details" />
          <div>
            <button className="btn-cancel">Cancel</button>
            <button className="btn-add">Add Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedback;
