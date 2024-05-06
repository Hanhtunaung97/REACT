import React from "react";

const Category = ({ category }) => {
  return (
    <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
      {category}
    </button>
  );
};

export default Category;
