//styling
import "./App.scss";

//modules
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

//components
import Header from "./components/Header";
import DisplayItems from "./components/DisplayItems";
import Categories from "./components/Categories";
import CartItems from "./components/CartItems";
import Footer from "./components/Footer";

function App() {
  //store api data
  const [data, setData] = useState([]);

  //filter api data
  const [filtered, setFiltered] = useState([]);

  //create categories
  const [categories, setCategories] = useState([]);

  //store cart items
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseCoffee = await axios({
        url: "https://api.unsplash.com/search/photos",
        params: {
          client_id: "d54vE8fu6bjJ_JgkBqugaZOt4bwFHGkmiKDGHunnXxc",
          query: "capuccino",
          orientation: "portrait",
          per_page: 6,
        },
      });

      //add additional data to response
      const coffeePrices = [4.15, 3.65, 3.45, 4.65, 8.75, 4.95];
      const coffeeNames = [
        "Caramel Macchiato",
        "White Chocolate Mocha",
        "Skinny Vanilla Latte",
        "Caffee Mocha",
        "Cinnamon Dolce Latte",
        "Flat White",
      ];

      const moreCoffeeData = responseCoffee.data.results.map((item, index) => {
        return {
          ...item,
          category: "Coffee",
          coffeePrices: coffeePrices[index],
          coffeeNames: coffeeNames[index],
        };
      });

      const responseDonut = await axios({
        url: "https://api.unsplash.com/search/photos",
        params: {
          client_id: "d54vE8fu6bjJ_JgkBqugaZOt4bwFHGkmiKDGHunnXxc",
          query: "donuts",
          orientation: "portrait",
          per_page: 6,
        },
      });

      //add additional data to response
      const donutPrices = [2.55, 3.99, 1.88, 2.39, 2.55, 4.55];
      const donutNames = [
        "Strawberry Frosted Donut",
        "Chocholate Glazed Donut",
        "Honey Glaze Donut",
        "Cream Filled Donut",
        "Matcha Baked Donut",
        "Caramel Glaze Donut",
      ];

      const moreDonutData = responseDonut.data.results.map((item, index) => {
        return {
          ...item,
          category: "Donuts",
          donutPrices: donutPrices[index],
          donutNames: donutNames[index],
        };
      });
      setData([...moreCoffeeData, ...moreDonutData]);
      setFiltered([...moreCoffeeData, ...moreDonutData]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    //obtain individual categories and add 'all'
    setCategories([...new Set(data.map((item) => item.category)), "All"]);
  }, [data]);

  //filter by category
  const handleCategory = (category) => {
    if (category === "All") {
      setFiltered(data);
    } else {
      setFiltered(data.filter((item) => item.category === category));
    }
  };

  //add items to cart and create count
  const handleAddItem = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const [categoryName, setCategoryName] = useState("");

  const singleCategory = (name) => {
    const singleCategory = categories.find((category) => category === name);
    setCategoryName(singleCategory);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header cart={cart} />
              <Categories
                categories={categories}
                handleCategory={handleCategory}
                singleCategory={singleCategory}
              />
              <DisplayItems
                data={filtered}
                handleAddItem={handleAddItem}
                categoryName={categoryName}
              />
              <Footer />
            </>
          }
        />
        <Route path="/cartItems" element={<CartItems cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
