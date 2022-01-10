import React from "react";
import { Link } from "react-router-dom";
import "../style/filter.css";

const Filter = (props) => {
  const feedbacks = props.feedbacks;
  const sort = props.sort;
  const handleSort = props.handleSort;
  return (
    <div className="filter-container">
      <h3>
        <i className="fas fa-lightbulb"></i> {feedbacks.length} Suggestions
      </h3>
      <div className="sort">
        <p>Sort By : </p>
        <select value={sort} onChange={handleSort}>
          <option value="mostUpvotes">Most Upvotes</option>
          <option value="leastUpvotes">Least Upvotes</option>
          <option value="mostComments">Most Comments</option>
          <option value="leastComments">Least Comments</option>
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
