import React from "react";
import { motion } from "framer-motion";
import RoadmapHeader from "../components/RoadmapHeader";
import Planned from "../components/Planned";
import Progress from "../components/Progress";
import Live from "../components/Live";
import "../style/roadmaplist.css";
import { useState } from "react";

const RoadmapList = (props) => {
  const plannedFeedbacks = props.plannedFeedbacks;
  const progressFeedbacks = props.progressFeedbacks;
  const liveFeedbacks = props.liveFeedbacks;
  const setFeedbackIdSelected = props.setFeedbackIdSelected;
  const setFeedbackInfoSelected = props.setFeedbackInfoSelected;
  const loggedIn = props.loggedIn;
  const datos = props.datos;
  const getPlannedFeedbacks = props.getPlannedFeedbacks;
  const getProgressFeedbacks = props.getProgressFeedbacks;
  const getLiveFeedbacks = props.getLiveFeedbacks;
  const [planned, setPlanned] = useState(true);
  const [progress, setProgress] = useState(false);
  const [live, setLive] = useState(false);
  const togglePlanned = () => {
    setPlanned(true);
    setProgress(false);
    setLive(false);
  };

  const toggleProgress = () => {
    setPlanned(false);
    setProgress(true);
    setLive(false);
  };

  const toggleLive = () => {
    setPlanned(false);
    setProgress(false);
    setLive(true);
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
      className="roadmap-wrapper"
    >
      <div className="roadmap-wrapper2">
        <RoadmapHeader />
        {/* mobile menu */}
        <div className="mobile-roadmap-menu">
          <button
            className={planned ? "btn-active-planned" : "btn-notActive"}
            onClick={togglePlanned}
          >
            Planned (2)
          </button>
          <button
            className={progress ? "btn-active-progress" : "btn-notActive"}
            onClick={toggleProgress}
          >
            In-Progress (2)
          </button>
          <button
            className={live ? "btn-active-live" : "btn-notActive"}
            onClick={toggleLive}
          >
            Live (2)
          </button>
        </div>
        {/* mobile version */}
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="roadmap-mobile"
        >
          {planned && (
            <Planned
              key={plannedFeedbacks._id}
              plannedFeedbacks={plannedFeedbacks}
              setFeedbackIdSelected={setFeedbackIdSelected}
              setFeedbackInfoSelected={setFeedbackInfoSelected}
              loggedIn={loggedIn}
              datos={datos}
              getPlannedFeedbacks={getPlannedFeedbacks}
            />
          )}
          {progress && (
            <Progress
              key={progressFeedbacks._id}
              progressFeedbacks={progressFeedbacks}
              setFeedbackIdSelected={setFeedbackIdSelected}
              setFeedbackInfoSelected={setFeedbackInfoSelected}
              loggedIn={loggedIn}
              datos={datos}
              getProgressFeedbacks={getProgressFeedbacks}
            />
          )}
          {live && (
            <Live
              key={liveFeedbacks._id}
              liveFeedbacks={liveFeedbacks}
              setFeedbackIdSelected={setFeedbackIdSelected}
              setFeedbackInfoSelected={setFeedbackInfoSelected}
              loggedIn={loggedIn}
              datos={datos}
              getLiveFeedbacks={getLiveFeedbacks}
            />
          )}
        </motion.div>
        {/* desktop version */}
        <div className="roadmap-grid">
          <Planned
            key={plannedFeedbacks._id}
            plannedFeedbacks={plannedFeedbacks}
            setFeedbackIdSelected={setFeedbackIdSelected}
            setFeedbackInfoSelected={setFeedbackInfoSelected}
            loggedIn={loggedIn}
            datos={datos}
            getPlannedFeedbacks={getPlannedFeedbacks}
          />
          <Progress
            progressFeedbacks={progressFeedbacks}
            setFeedbackIdSelected={setFeedbackIdSelected}
            setFeedbackInfoSelected={setFeedbackInfoSelected}
            loggedIn={loggedIn}
            datos={datos}
            getProgressFeedbacks={getProgressFeedbacks}
          />
          <Live
            liveFeedbacks={liveFeedbacks}
            setFeedbackIdSelected={setFeedbackIdSelected}
            setFeedbackInfoSelected={setFeedbackInfoSelected}
            loggedIn={loggedIn}
            datos={datos}
            getLiveFeedbacks={getLiveFeedbacks}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapList;
