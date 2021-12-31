import React from "react";
import "../style/categories.css";

const Categories = (props) => {
  const feedbackCategorySelected = props.feedbackCategorySelected;
  const setFeedbackCategorySelected = props.setFeedbackCategorySelected;

  return (
    <div className="categories-container">
      <button
        className={
          feedbackCategorySelected === ""
            ? "btn-categories-active"
            : "btn-categories-inActive"
        }
        onClick={() => setFeedbackCategorySelected("")}
      >
        All
      </button>
      <button
        className={
          feedbackCategorySelected === "UI"
            ? "btn-categories-active"
            : "btn-categories-inActive"
        }
        onClick={() => setFeedbackCategorySelected("UI")}
      >
        UI
      </button>
      <button
        className={
          feedbackCategorySelected === "UX"
            ? "btn-categories-active"
            : "btn-categories-inActive"
        }
        onClick={() => setFeedbackCategorySelected("UX")}
      >
        UX
      </button>
      <button
        className={
          feedbackCategorySelected === "enhancement"
            ? "btn-categories-active"
            : "btn-categories-inActive"
        }
        onClick={() => setFeedbackCategorySelected("enhancement")}
      >
        Enhancement
      </button>
      <button
        className={
          feedbackCategorySelected === "bug"
            ? "btn-categories-active"
            : "btn-categories-inActive"
        }
        onClick={() => setFeedbackCategorySelected("bug")}
      >
        Bug
      </button>
      <button
        className={
          feedbackCategorySelected === "feature"
            ? "btn-categories-active"
            : "btn-categories-inActive"
        }
        onClick={() => setFeedbackCategorySelected("feature")}
      >
        Feature
      </button>
    </div>
  );
};

export default Categories;
