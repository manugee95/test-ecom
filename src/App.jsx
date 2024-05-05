import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Featured from "./components/Featured";
import TopSelling from "./components/TopSelling";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { carousel } from "./data/EcomData";
import { EcomProvider } from "./context/EcomContext";
import { useEffect, useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <EcomProvider products={product}>
      <Router>
        <Header />
        <Alert />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel images={carousel} />
                <Featured />
                <TopSelling />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </EcomProvider>
  );
}

export default App;
