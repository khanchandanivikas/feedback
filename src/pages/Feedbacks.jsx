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
  const plannedFeedbacks = props.plannedFeedbacks;
  const progressFeedbacks = props.progressFeedbacks;
  const liveFeedbacks = props.liveFeedbacks;
  const feedbackCategorySelected = props.feedbackCategorySelected;
  const setFeedbackCategorySelected = props.setFeedbackCategorySelected;
  const gestionarLogout = props.gestionarLogout;
  const datos = props.datos;
  const loggedIn = props.loggedIn;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  const getAllFeedbacks = props.getAllFeedbacks;
  const getPlannedFeedbacks = props.getPlannedFeedbacks;
  const getProgressFeedbacks = props.getProgressFeedbacks;
  const getLiveFeedbacks = props.getLiveFeedbacks;
  const deleteUser = props.deleteUser;

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
        <Profile
          gestionarLogout={gestionarLogout}
          datos={datos}
          loggedIn={loggedIn}
          deleteUser={deleteUser}
        />
        <Categories
          feedbackCategorySelected={feedbackCategorySelected}
          setFeedbackCategorySelected={setFeedbackCategorySelected}
        />
        <Roadmap
          plannedFeedbacks={plannedFeedbacks}
          progressFeedbacks={progressFeedbacks}
          liveFeedbacks={liveFeedbacks}
        />
      </div>
      <Filter feedbacks={feedbacks} />
      <FeedbackLists
        key={feedbacks._id}
        feedbacks={feedbacks}
        setFeedbackIdSelected={setFeedbackIdSelected}
        setFeedbackInfoSelected={setFeedbackInfoSelected}
        datos={datos}
        loggedIn={loggedIn}
        getAllFeedbacks={getAllFeedbacks}
        getPlannedFeedbacks={getPlannedFeedbacks}
        getProgressFeedbacks={getProgressFeedbacks}
        getLiveFeedbacks={getLiveFeedbacks}
      />
    </motion.div>
  );
};

export default Feedbacks;
