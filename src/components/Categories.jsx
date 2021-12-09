import React from "react";
import "../style/categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <button>All</button>
      <button>UI</button>
      <button>UX</button>
      <button>Enhancement</button>
      <button>Bug</button>
      <button>Feature</button>
    </div>
  );
};

export default Categories;
