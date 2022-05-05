import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <div className="headerContainer">
      <div className="wrapper">
        <h1>Coffee & Donuts</h1>
        <Link to={"/cartItems"}>
          <p>
            Cart:{" "}
            {cart
              .map((item) => item.quantity)
              .reduce((previous, current) => previous + current, 0)}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
