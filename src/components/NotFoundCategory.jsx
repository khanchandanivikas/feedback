import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/notFoundCategory.css";

const NotFoundCategory = () => {
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
      exit="hidden"
      className="notFound-container"
    >
      <img
        src="https://i.postimg.cc/mk9ZnsPN/notFound.png"
        alt="category not found"
      />
      <h3>There is no feedbacks in this category yet.</h3>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <div>
        <Link to="/addFeedback">
          <button className="btn-add-feedback">+ Add Feedback</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundCategory;
