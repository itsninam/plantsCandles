import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CartItems = ({ cart, removeItem }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalItems = () => {
      const total = cart.reduce(
        (previous, current) => previous + current.quantity,
        0
      );
      setTotalItems(total);
    };
    calculateTotalItems();
  }, [cart]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cart.reduce(
        (previous, current) =>
          previous + (current.plantPrices || current.candlePrices),
        0
      );

      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="wrapper">
      {cart.length === 0 ? (
        <div className="emptyCart">
          <h2>No items in cart</h2>
          <Link to={"/"}>
            {" "}
            <button className="btn">Start your order </button>
          </Link>
        </div>
      ) : (
        <>
          <Link to={"/"}>
            <div className="flexContainer accentHover">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrowIcon"
                aria-hidden="true"
              />
              <p>Back to Store</p>
            </div>
          </Link>
          {/* <ul className="cartList">
            {cart.map((item) => {
              return (
                <li key={item.id} className="cartItems">
                  <img src={item.urls.small} alt={item.alt_description}></img>
                  <div className="flexContainer">
                    <p>
                      {item.candleNames}
                      {item.plantNames}
                    </p>
                    <button className="btn" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                  <p>{item.quantity}</p>
                  <p>
                    {"$"}
                    {item.plantPrices * item.quantity ||
                      item.candlePrices * item.quantity}
                  </p>
                </li>
              );
            })}
          </ul> */}
          <table className="cartItems">
            <tr>
              <th> </th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cart.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      <img src={item.urls.small} alt={item.alt_description} />
                    </td>
                    <td>
                      <div className="flexContainer">
                        {item.candleNames} {item.plantNames}
                        <button
                          className="btn"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {"$"}
                      {item.candlePrices}
                      {item.plantPrices}
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
          <table className="totalInfo wrapper">
            <tr>
              <table>Total:</table>
            </tr>
            <tr>
              <td>{totalItems}</td>
              <td>
                {"$"}
                {totalPrice.toFixed(2)}
              </td>
            </tr>
          </table>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CartItems;
