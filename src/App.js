//styling
import "./styles/Sass/App.scss";

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
      const responsePlant = await axios({
        url: "https://api.unsplash.com/search/photos",
        params: {
          client_id: "d54vE8fu6bjJ_JgkBqugaZOt4bwFHGkmiKDGHunnXxc",
          query: "potted plant",
          orientation: "portrait",
          per_page: 6,
        },
      });

      console.log(responsePlant);

      //add additional data to response
      const plantPrices = [30.15, 25.65, 22.45, 50.65, 45.75, 30.95];
      const plantNames = [
        "Burgundy Rubber Tree",
        "Zamiifolia",
        "Devil's Ivy",
        "Monstera",
        "Snake Plant",
        "Bird's Nest Fern",
      ];

      const morePlantData = responsePlant.data.results.map((item, index) => {
        return {
          ...item,
          category: "Plants",
          plantPrices: plantPrices[index],
          plantNames: plantNames[index],
        };
      });

      const responseCandle = await axios({
        url: "https://api.unsplash.com/search/photos",
        params: {
          client_id: "d54vE8fu6bjJ_JgkBqugaZOt4bwFHGkmiKDGHunnXxc",
          query: "candles",
          orientation: "portrait",
          per_page: 6,
        },
      });

      //add additional data to response
      const candlePrices = [8.55, 5.99, 9.88, 7.39, 10.55, 8.55];
      const candleNames = [
        "Mahogany Teakwood",
        "Ocean Driftwood",
        "White Tea and Sage",
        "Champagne Toast",
        "Lavender Vanilla",
        "Lemon Cake Pop",
      ];

      const moreCandleData = responseCandle.data.results.map((item, index) => {
        return {
          ...item,
          category: "Candles",
          candlePrices: candlePrices[index],
          candleNames: candleNames[index],
        };
      });
      setData([...morePlantData, ...moreCandleData]);
      setFiltered([...morePlantData, ...moreCandleData]);
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
