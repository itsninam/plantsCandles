const Categories = ({
  categories,
  handleSelectCategory,
  displayCategoryName,
}) => {
  return (
    <nav className="wrapper">
      <div className="categoryButtons">
        <p>Browse by</p>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    handleSelectCategory(category);
                    displayCategoryName(category);
                  }}
                >
                  {category === "All" ? <>All Products</> : <>{category}</>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Categories;
