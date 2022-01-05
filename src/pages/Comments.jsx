import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import ReplyBox from "../components/ReplyBox";
import { useState } from "react";
import Replies from "../components/Replies";
import "../style/comments.css";
import cogoToast from "cogo-toast";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Comments = (props) => {
  let history = useHistory();
  const datos = props.datos;
  const loggedIn = props.loggedIn;
  const feedbackSelected = props.feedbackSelected;
  const feedbackSelectedInfo = props.feedbackSelectedInfo;
  const feedbackIdSelected = props.feedbackIdSelected;
  const getSelectedFeedback = props.getSelectedFeedback;
  const [reply, setReply] = useState(false);
  const toggleReply = () => {
    setReply(!reply);
  };

  const [details, setDetails] = useState("");
  const handleDetails = (e) => {
    setDetails(e.target.value);
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

  // create comment
  const createComment = async (e) => {
    e.preventDefault();
    if (loggedIn) {
      await axios
        .post(process.env.REACT_APP_BACKEND_URL + "/api/comment/", {
          details: details,
          creator: datos.userId,
          feedback_ref: feedbackIdSelected,
        })
        .then((response) => {
          setDetails("");
          getSelectedFeedback(response.data.comment.feedback_ref);
          cogoToast.success("Comment Created");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Not Logged",
        text: "You must be logged in to post a comment",
        confirmButtonColor: "#4661e6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
  };

  const handleEditClick = () => {
    if (loggedIn) {
      history.push("/editFeedback")
    } else {
      Swal.fire({
        icon: "error",
        title: "Not Logged",
        text: "You must be logged in to edit a feedback",
        confirmButtonColor: "#4661e6",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/signin");
        }
      });
    }
  }

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
            <button onClick={handleEditClick} className="btn-cancel">Edit Feedback</button>
        </div>
        {/* feedback title */}
        <div className="feedback-single">
          <div className="feedback-upvote">
            <i className="fas fa-chevron-up"></i>
            <button className="upvote">{feedbackSelectedInfo.votes}</button>
          </div>
          <div>
            <Link to="/comments">
              <h3 className="link">{feedbackSelectedInfo.title}</h3>
            </Link>
            <p>{feedbackSelectedInfo.details}</p>
            <button>{feedbackSelectedInfo.category}</button>
          </div>
          <div>
            <i className="fas fa-comment"></i>
            <h4>
              {!feedbackSelectedInfo.comments
                ? null
                : feedbackSelectedInfo.comments.length}
            </h4>
          </div>
        </div>
        {/* comments */}
        <div className="comment-container">
          <h3>{feedbackSelected.length} Comments</h3>
          {feedbackSelected.map((comment) => {
            console.log(feedbackSelected.indexOf(comment));
            return (
              <div key={comment._id}>
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
                {comment.replies.length > 0 && (
                  <Replies key={comment._id} comment={comment} />
                )}
              </div>
            );
          })}
        </div>
        {/* add comment form */}
        <div className="addComment-container">
          <h3>Add Comment</h3>
          <form action="" onSubmit={createComment}>
            <textarea
              value={details}
              onChange={handleDetails}
              placeholder="Type your comment here"
            />
            <div>
              <button type="submit">Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Comments;
