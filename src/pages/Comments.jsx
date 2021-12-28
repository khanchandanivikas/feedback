import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ReplyBox from "../components/ReplyBox";
import { useState } from "react";
import "../style/comments.css";

const Comments = () => {
  const [reply, setReply] = useState(false);
  const toggleReply = () => {
    setReply(!reply);
  };

  const animation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      className="comments-container"
    >
      <div>
        <div className="goBack">
          <Link to="/">
            <p>
              <i className="fas fa-chevron-left"></i>Go Back
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
              <h4 onClick={toggleReply}>Reply</h4>
            </div>
          </div>
          <AnimatePresence>{reply ? <ReplyBox /> : null}</AnimatePresence>
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
            <textarea placeholder="Type your comment here" />
            <div>
              <button>Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Comments;
