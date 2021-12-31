import React from "react";
import { Link } from "react-router-dom";
import "../style/filter.css";

const Filter = (props) => {
  const feedbacks = props.feedbacks;
  return (
    <div className="filter-container">
      <h3>
        <i className="fas fa-lightbulb"></i> {feedbacks.length} Suggestions
      </h3>
      <div className="sort">
        <p>Sort By : </p>
        <select>
          <option value="most upvotes">Most Upvotes</option>
          <option value="least upvotes">Least Upvotes</option>
          <option value="most comments">Most Comments</option>
          <option value="least comments">Least Comments</option>
        </select>
      </div>
      <div>
        <Link to="/addFeedback">
          <button className="btn-add-feedback">+ Add Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default Filter;
