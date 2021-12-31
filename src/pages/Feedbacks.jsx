import React from "react";
import { motion } from "framer-motion";
import Profile from "../components/Profile";
import Categories from "../components/Categories";
import Roadmap from "../components/Roadmap";
import Filter from "../components/Filter";
import FeedbackLists from "../components/FeedbackLists";
import "../style/feedbacks.css";

const Feedbacks = (props) => {
  const feedbacks = props.feedbacks;
  const feedbackCategorySelected = props.feedbackCategorySelected;
  const setFeedbackCategorySelected = props.setFeedbackCategorySelected;

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
      className="dashboard-container"
    >
      <div className="dashboard-header">
        <Profile />
        <Categories
          feedbackCategorySelected={feedbackCategorySelected}
          setFeedbackCategorySelected={setFeedbackCategorySelected}
        />
        <Roadmap />
      </div>
      <Filter />
      <FeedbackLists key={feedbacks._id} feedbacks={feedbacks} />
    </motion.div>
  );
};

export default Feedbacks;
