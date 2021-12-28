import React from "react";
import { motion } from "framer-motion";
import "../style/replyBox.css";

const ReplyBox = () => {
  const animation = {
    hidden: { scaleY: 0, transformOrigin: "top"},
    visible: {
      scaleY: 1,
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
      exit="hidden"
      className="reply-form-container"
    >
      <form action="" className="reply-form">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Replying to @upbeat1811"
        ></textarea>
        <div>
          <button>
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ReplyBox;
