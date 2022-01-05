import React from "react";
import { useState } from "react";
import ReplyBox from "../components/ReplyBox";
import { AnimatePresence } from "framer-motion";

const Replies = (props) => {
  const comment = props.comment;
  const [replyReply, setReplyReply] = useState(false);
  const toggleReply = () => {
    setReplyReply(!replyReply);
  };

  return (
    <div className="comment-container">
      <div className="comments_reply">  
        <div>
          <img src={comment.creator.avatar} alt="avater" />
        </div>
        <div>
          <h4>{comment.creator.name}</h4>
          <p>@{comment.creator.userName}</p>
          {comment.replies.map((reply) => {
            return (
              <p key={reply._id}>{reply.details}</p>
            );
          })}
        </div>
        <div>
          <h4 onClick={toggleReply}>Reply</h4>
        </div>
      </div>
      <div style={{ paddingLeft: "6rem" }}>
        <AnimatePresence>{replyReply ? <ReplyBox /> : null}</AnimatePresence>
      </div>
    </div>
  );
};

export default Replies;
