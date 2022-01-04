import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ReplyBox from "../components/ReplyBox";
import { useState } from "react";
import Replies from "../components/Replies";
import "../style/comments.css";

const Comments = (props) => {
  const feedbackSelected = props.feedbackSelected;
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
          <Link to="/editFeedback">
            <button className="btn-cancel">Edit Feedback</button>
          </Link>
        </div>
        {/* feedback title */}
        <div className="feedback-single">
          <div className="feedback-upvote">
            <i className="fas fa-chevron-up"></i>
            <button className="upvote">
              {feedbackSelected[0].feedback_ref.votes}
            </button>
          </div>
          <div>
            <Link to="/comments">
              <h3 className="link">{feedbackSelected[0].feedback_ref.title}</h3>
            </Link>
            <p>{feedbackSelected[0].feedback_ref.details}</p>
            <button>{feedbackSelected[0].feedback_ref.category}</button>
          </div>
          <div>
            <i className="fas fa-comment"></i>
            <h4>{feedbackSelected[0].feedback_ref.comments.length}</h4>
          </div>
        </div>
        {/* comments */}
        <div className="comment-container">
          <h3>Comments</h3>
          {feedbackSelected.map((comment) => {
            return (
              <div>
                <div className="comments">
                  <div>
                    <img src={comment.creator.avatar} alt="avater" />
                  </div>
                  <div>
                    <h4>{comment.creator.name}</h4>
                    <p>@{comment.creator.userName}</p>
                    <p>{comment.details}</p>
                  </div>
                  <div>
                    <h4 onClick={toggleReply}>Reply</h4>
                  </div>
                </div>
                <AnimatePresence>{reply ? <ReplyBox /> : null}</AnimatePresence>
                {comment.replies.length > 0 && <Replies comment={comment} />}
              </div>
            );
          })}
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
