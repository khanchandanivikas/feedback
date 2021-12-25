import React from "react";
import { motion } from "framer-motion";
import Profile from "../components/Profile";
import Categories from "../components/Categories";
import Roadmap from "../components/Roadmap";
import Filter from "../components/Filter";
import FeedbackLists from "../components/FeedbackLists";
import "../style/feedbacks.css";

const Feedbacks = () => {
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
        <Categories />
        <Roadmap />
      </div>
      <Filter />
      <FeedbackLists />
    </motion.div>
  );
};

export default Feedbacks;
