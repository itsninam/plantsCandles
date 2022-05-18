//styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

//modules
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({ cart }) => {
  const [totalCart, setTotalCart] = useState("");

  useEffect(() => {
    const cartItems = (items) => {
      const totalItems = items.reduce(
        (previous, current) => previous + current.quantity,
        0
      );
      return totalItems;
    };
    setTotalCart(cartItems(cart));
  }, [cart]);

  return (
    <header>
      <div className="wrapper">
        <h1>Plants & Candles</h1>
        <Link to="/cartItems">
          <p>
            <FontAwesomeIcon
              icon={faCertificate}
              className="icon"
              aria-hidden="true"
            />
            <span className="sr-only">Link to cart</span>
            <span>{totalCart}</span>
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
