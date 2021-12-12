import React from "react";
import { Link } from "react-router-dom";
import "../style/comments.css";

const Comments = () => {
  return (
    <div className="comments-container">
      <div className="addFeedback-container">
        <div className="goBack">
          <Link to="/">
            <p>
              <i class="fas fa-chevron-left"></i>Go Back
            </p>
          </Link>
          <Link to="editFeedback">
            <button className="btn-cancel">Edit Feedback</button>
          </Link>
        </div>
        {/* feedback title */}
        <div className="feedback-single">
          <div className="feedback-upvote">
            <i className="fas fa-chevron-up"></i>
            <button className="upvote">112</button>
          </div>
          <div>
            <Link to="/comments">
              <h3 className="link">Add tags for solutions</h3>
            </Link>
            <p>Easier to search for solutions based on a specific stack.</p>
            <button>Enhancement</button>
          </div>
          <div>
            <i className="fas fa-comment"></i>
            <h4>2</h4>
          </div>
        </div>
        {/* comments */}
        <div className="comment-container">
          <h3>2 Comments</h3>
          <div className="comments">
            <div>
              <img
                src="https://www.latercera.com/resizer/19MQq8hJsodsUsY6GSYH_nhx2gQ=/arc-anglerfish-arc2-prod-copesa/public/3GPNPUITY5ECRDOL6BMREV6S6M.jpg"
                alt="avater"
              />
            </div>
            <div>
              <h4>Suzanne Chang</h4>
              <p>@upbeat1811</p>
              <p>
                Awesome idea! Trying to find framework-specific projects within
                the hubs can be tedious
              </p>
            </div>
            <div>
              <h4>Reply</h4>
            </div>
          </div>
          <div className="comments">
            <div>
              <img
                src="https://www.latercera.com/resizer/19MQq8hJsodsUsY6GSYH_nhx2gQ=/arc-anglerfish-arc2-prod-copesa/public/3GPNPUITY5ECRDOL6BMREV6S6M.jpg"
                alt="avater"
              />
            </div>
            <div>
              <h4>Suzanne Chang</h4>
              <p>@upbeat1811</p>
              <p>
                Awesome idea! Trying to find framework-specific projects within
                the hubs can be tedious
              </p>
            </div>
            <div>
              <h4>Reply</h4>
            </div>
          </div>
        </div>
        {/* add comment form */}
        <div className="addComment-container">
          <h3>Add Comment</h3>
          <form action="">
            <input type="text" name="" id="" placeholder="Type your comment here" />
            <div>
              <button>Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
