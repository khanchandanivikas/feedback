import React from "react";
import Profile from "../components/Profile";
import Categories from "../components/Categories";
import Roadmap from "../components/Roadmap";
import Filter from "../components/Filter";
import FeedbackLists from "../components/FeedbackLists";
import "../style/feedbacks.css";

const Feedbacks = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Profile />
        <Categories />
        <Roadmap />
      </div>
      <Filter />
      <FeedbackLists />
    </div>
  );
};

export default Feedbacks;
