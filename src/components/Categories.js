const Categories = ({ categories, handleCategory }) => {
  return (
    <div className="wrapper">
      <div className="categoryButtons">
        {categories.map((category, index) => {
          return (
            <button key={index} onClick={() => handleCategory(category)}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
