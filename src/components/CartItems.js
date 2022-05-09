//styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import Footer from "./Footer";

const CartItems = ({ cart, removeItem }) => {
  //store total items amount
  const [totalItems, setTotalItems] = useState(0);
  //store total price amount
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    //add all items in cart to calculate total
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
    //add price of all items to calculate total
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

  //ensure page is loaded at top when user enters cart items page
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className="wrapper">
        {cart.length === 0 ? (
          <div className="mainContainer">
            <div className="emptyCart">
              <h2>No items in cart</h2>
              <Link to={"/"}>
                {" "}
                <button className="btn">Start your order </button>
              </Link>
            </div>
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
      </section>
      <Footer />
    </>
  );
};

export default CartItems;
