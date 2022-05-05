const DisplayItems = ({ data, handleAddItem }) => {
  return (
    <div className="wrapper">
      <ul className="itemsContainer">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.urls.small} alt={item.alt_description}></img>
              <div className="flexContainer">
                <p>
                  {item.donutNames}
                  {item.coffeeNames}
                </p>
                <p>
                  $ {item.coffeePrices} {item.donutPrices}
                </p>
              </div>
              <button onClick={() => handleAddItem(item)}>Add to order</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayItems;
