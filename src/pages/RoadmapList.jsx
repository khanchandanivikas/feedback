import React from "react";
import { motion } from "framer-motion";
import RoadmapHeader from "../components/RoadmapHeader";
import Planned from "../components/Planned";
import Progress from "../components/Progress";
import Live from "../components/Live";
import "../style/roadmaplist.css";

const RoadmapList = () => {
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
