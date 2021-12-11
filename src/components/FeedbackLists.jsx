import React from "react";
import { Link } from "react-router-dom";
import "../style/feedbackLists.css";

const FeedbackLists = () => {
  return (
    <div className="feedback-multiple">
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
      <div className="feedback-single">
        <div className="feedback-upvote">
          <i className="fas fa-chevron-up"></i>
          <button className="upvote">112</button>
        </div>
        <div>
          <h3>Add tags for solutions</h3>
          <p>Easier to search for solutions based on a specific stack.</p>
          <button>Enhancement</button>
        </div>
        <div>
          <i className="fas fa-comment"></i>
          <h4>2</h4>
        </div>
      </div>
      <div className="feedback-single">
        <div className="feedback-upvote">
          <i className="fas fa-chevron-up"></i>
          <button className="upvote">112</button>
        </div>
        <div>
          <h3>Add tags for solutions</h3>
          <p>Easier to search for solutions based on a specific stack.</p>
          <button>Enhancement</button>
        </div>
        <div>
          <i className="fas fa-comment"></i>
          <h4>2</h4>
        </div>
      </div>
      <div className="feedback-single">
        <div className="feedback-upvote">
          <i className="fas fa-chevron-up"></i>
          <button className="upvote">112</button>
        </div>
        <div>
          <h3>Add tags for solutions</h3>
          <p>Easier to search for solutions based on a specific stack.</p>
          <button>Enhancement</button>
        </div>
        <div>
          <i className="fas fa-comment"></i>
          <h4>2</h4>
        </div>
      </div>
      <div className="feedback-single">
        <div className="feedback-upvote">
          <i className="fas fa-chevron-up"></i>
          <button className="upvote">112</button>
        </div>
        <div>
          <h3>Add tags for solutions</h3>
          <p>Easier to search for solutions based on a specific stack.</p>
          <button>Enhancement</button>
        </div>
        <div>
          <i className="fas fa-comment"></i>
          <h4>2</h4>
        </div>
      </div>
      <div className="feedback-single">
        <div className="feedback-upvote">
          <i className="fas fa-chevron-up"></i>
          <button className="upvote">112</button>
        </div>
        <div>
          <h3>Add tags for solutions</h3>
          <p>Easier to search for solutions based on a specific stack.</p>
          <button>Enhancement</button>
        </div>
        <div>
          <i className="fas fa-comment"></i>
          <h4>2</h4>
        </div>
      </div>
    </div>
  );
};

export default FeedbackLists;
