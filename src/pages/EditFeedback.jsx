import React from "react";
import { Link } from "react-router-dom";
import "../style/editFeedback.css";

const EditFeedback = () => {
  return (
    <div className="editFeedback-wrapper">
      <div className="editFeedback-container">
        <div className="back">
          <Link to="/">
            <p>
              <i className="fas fa-chevron-left"></i>Go Back
            </p>
          </Link>
        </div>
        <form action="" className="editFeedback-form">
          <h1><i class="fas fa-pen-nib"></i></h1>
          <h2>Editing 'Add tags for solutions'</h2>
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
          <label htmlFor="status">Update Status</label>
          <p>Change feature state</p>
          <select name="status">
            <option value="suggestion">Suggestion</option>
            <option value="planned">Planned</option>
            <option value="enhancement">Enhancement</option>
            <option value="progress">In-Progress</option>
            <option value="live">Live</option>
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
    </div>
  );
};

export default EditFeedback;
