const Categories = ({ categories, handleCategory, singleCategory }) => {
  return (
    <nav className="wrapper">
      <div className="categoryButtons">
        <p>Products</p>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    handleCategory(category);
                    singleCategory(category);
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
