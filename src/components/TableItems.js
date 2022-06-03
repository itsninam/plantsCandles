//components
import ModalWindow from "./ModalWindow";

//modules
import { useState } from "react";

const TableItems = ({ cart, totalItems, totalPrice, handleRemoveItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToModal = () => {
    setIsModalOpen(true);
    //scroll to middle of screen to reveal modal window
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <div className="tableContainer">
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
      <div className="purchaseBtnContainer">
        <button
          className="btn purchaseBtn"
          // onClick={() => setIsModalOpen(true)}
          onClick={scrollToModal}
        >
          Purchase
        </button>
      </div>
      {isModalOpen ? <ModalWindow setIsModalOpen={setIsModalOpen} /> : ""}
    </div>
  );
};

export default TableItems;
