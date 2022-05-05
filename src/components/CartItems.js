import { Link } from "react-router-dom";

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
            <p>Back to Menu</p>
          </Link>
          <ul className="itemsContainer">
            {cart.map((item) => {
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
                  <p>({item.quantity})</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default CartItems;
