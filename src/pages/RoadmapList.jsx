import React from "react";
import { motion } from "framer-motion";
import RoadmapHeader from "../components/RoadmapHeader";
import Planned from "../components/Planned";
import Progress from "../components/Progress";
import Live from "../components/Live";
import "../style/roadmaplist.css";
import { useState } from "react";

const RoadmapList = () => {
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
          {planned && <Planned />}
          {progress && <Progress />}
          {live && <Live />}
        </motion.div>
        {/* desktop version */}
        <div className="roadmap-grid">
          <Planned />
          <Progress />
          <Live />
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapList;
