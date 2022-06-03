//styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//components
import Footer from "./Footer";
import TableItems from "./TableItems";

const CartItems = ({ cart, handleRemoveItem }) => {
  //store total items amount
  const [totalItems, setTotalItems] = useState(0);
  //store total price amount
  const [totalPrice, setTotalPrice] = useState(0);

  //calculate total items added to cart
  const calculateTotalItems = (cartItem) => {
    const total = cartItem.reduce(
      (previous, current) => previous + current.quantity,
      0
    );
    return total;
  };

  //calculate total price based on price * number of items
  const calculateTotalPrice = (itemPrice) => {
    const totalPrice = itemPrice.reduce(
      (previous, current) =>
        previous +
        (current.plantPrices || current.candlePrices) * current.quantity,
      0
    );

    return totalPrice;
  };

  useEffect(() => {
    setTotalItems(calculateTotalItems(cart));
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  useEffect(() => {
    //ensure page is loaded at top when user enters cart items page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="wrapper">
        {cart.length === 0 ? (
          <div className="mainContainer">
            <div className="alertCard">
              <h2>No items in cart</h2>
              <Link to="/">
                <button className="btn">Start your order </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <Link to="/">
              <div className="flexContainer accentHover">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="arrowIcon"
                  aria-hidden="true"
                />
                <p>Back to Store</p>
              </div>
            </Link>
            <TableItems
              cart={cart}
              totalItems={totalItems}
              totalPrice={totalPrice}
              handleRemoveItem={handleRemoveItem}
            />
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CartItems;
