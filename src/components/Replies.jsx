import React from "react";
import { useState } from "react";
import ReplyReplyBox from "../components/ReplyReplyBox";
import { AnimatePresence } from "framer-motion";

const Replies = (props) => {
  const comment = props.comment;
  const datos = props.datos;
  const loggedIn = props.loggedIn;
  const getSelectedFeedback = props.getSelectedFeedback;
  const [replBoxIndex, setReplyBoxIndex] = useState(null);
  const toggleReplyBox = (index) => {
    setReplyBoxIndex(index);
  };

  return (
    <div className="comment-container">
      {comment.replies.map((reply) => {
        return (
          <div key={reply._id}>
            <div className="comments_reply">
              <div>
                <img className="reply-img" src={reply.creatorAvatar} alt="avater" />
              </div>
              <div>
                <h4>{reply.creatorName}</h4>
                <p>@{reply.creatorUserName}</p>
                <p>
                  <span>{`@${reply.inResponseToUser}`}</span>{" "}
                  {`${reply.details}`}
                </p>
              </div>
              <div>
                {replBoxIndex !== null ? (
                  <h4 onClick={() => toggleReplyBox(null)}>Reply</h4>
                ) : (
                  <h4
                    onClick={() =>
                      toggleReplyBox(comment.replies.indexOf(reply))
                    }
                  >
                    Reply
                  </h4>
                )}
              </div>
            </div>
            <div style={{ paddingLeft: "6rem" }}>
              <AnimatePresence>
                {comment.replies.indexOf(reply) === replBoxIndex ? (
                  <ReplyReplyBox
                    reply={reply}
                    comment={comment}
                    loggedIn={loggedIn}
                    datos={datos}
                    getSelectedFeedback={getSelectedFeedback}
                    toggleReplyBox={toggleReplyBox}
                  />
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Replies;
