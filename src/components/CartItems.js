import { Link } from "react-router-dom";
import Footer from "./Footer";

const CartItems = ({ cart }) => {
  return (
    <div className="wrapper">
      {cart.length === 0 ? (
        <>
          <p>No items in cart</p>
          <Link to={"/"}>
            {" "}
            <p>Start your order </p>
          </Link>
        </>
      ) : (
        <>
          <Link to={"/"}>
            {" "}
            <p>Back to Store</p>
          </Link>
          <ul className="cartList">
            {cart.map((item) => {
              return (
                <li key={item.id} className="cartItems">
                  <img src={item.urls.small} alt={item.alt_description}></img>
                  <div className="flexContainer">
                    <p>
                      {item.candleNames}
                      {item.plantNames}
                    </p>
                    <button className="btn">Remove</button>
                  </div>
                  <p>{item.quantity}</p>
                  <p>
                    {"$"}
                    {item.plantPrices} {item.candlePrices}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CartItems;
