import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cart }) => {
  return (
    <header>
      <div className="wrapper">
        <h1>Plants & Candles</h1>
        <Link to={"/cartItems"}>
          <p>
            <FontAwesomeIcon
              icon={faCertificate}
              className="icon"
              aria-hidden="true"
            />
            <span className="sr-only">Link to cart</span>
            <span>
              {cart
                .map((item) => item.quantity)
                .reduce((previous, current) => previous + current, 0)}
            </span>
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
