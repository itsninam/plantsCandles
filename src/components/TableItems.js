const TableItems = ({ cart, totalItems, totalPrice, handleRemoveItem }) => {
  return (
    <>
      <table className="cartItems">
        <thead>
          <tr>
            <th> </th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        {cart.map((item) => {
          return (
            <>
              <tbody key={item.id}>
                <tr>
                  <td>
                    <img src={item.urls.small} alt={item.alt_description} />
                  </td>
                  <td>
                    <div className="flexContainer">
                      {item.candleNames} {item.plantNames}
                      <button
                        className="btn"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  <td>{item.quantity}</td>

                  <td>
                    {"$"}
                    {(
                      item.candlePrices * item.quantity ||
                      item.plantPrices * item.quantity
                    ).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
        <tbody className="totalInfo">
          <tr>
            <th scope="row">Total: </th>
            <td> </td>
            <td>{totalItems}</td>
            <td>
              {"$"}
              {totalPrice.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableItems;
