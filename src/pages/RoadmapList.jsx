import React from "react";
import RoadmapHeader from "../components/RoadmapHeader";
import Planned from "../components/Planned";
import Progress from "../components/Progress";
import Live from "../components/Live";
import "../style/roadmaplist.css";

const RoadmapList = () => {
  return (
    <div className="roadmap-wrapper">
      <div className="roadmap-wrapper2">
        <RoadmapHeader />
        <div className="roadmap-grid">
          <Planned />
          <Progress />
          <Live />
        </div>
      </div>
    </div>
  );
};

export default RoadmapList;
