import { useState } from "react";

const Categories = ({ categories, handleCategory, singleCategory }) => {
  return (
    <div className="wrapper">
      <div className="categoryButtons">
        {categories.map((category, index) => {
          return (
            <>
              <button
                key={index}
                onClick={() => {
                  handleCategory(category);
                  singleCategory(category);
                }}
              >
                {category}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
