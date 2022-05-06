const DisplayItems = ({ data, handleAddItem, categoryName }) => {
  return (
    <div className="wrapper">
      <div className="itemsContainer">
        {!categoryName ? <h2>All</h2> : <h2>{categoryName}</h2>}
        <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.urls.small} alt={item.alt_description}></img>
                <p>
                  {item.candleNames}
                  {item.plantNames}
                </p>
                <div className="flexContainer">
                  <p>
                    {"$"}
                    {item.plantPrices}
                    {item.candlePrices}
                  </p>
                  <button onClick={() => handleAddItem(item)}>
                    Add to order
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DisplayItems;
