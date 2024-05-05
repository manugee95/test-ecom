import { createContext, useState, useEffect } from "react";
import useAlert from "../hooks/useAlert";

const EcomContext = createContext();

export const EcomProvider = ({ children, products }) => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const {showAndHide, alertInfo} = useAlert()

  const featured = products.filter((item) => item.featured === true);
  const topSelling = products.filter((item) => item.topSelling === true);

  const addToCart = (newprod) => {
    try {
      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === newprod.id
      );
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        const itemToBeUpdated = updatedCartItems[existingItemIndex];
        itemToBeUpdated.quantity += newprod.quantity;
        itemToBeUpdated.amount = itemToBeUpdated.price * itemToBeUpdated.quantity;
        setCartItems(updatedCartItems);
        showAndHide("error", "Item already exist in cart")
      } else {
        setCartItems([
          ...cartItems,
          { ...newprod, quantity: 1, amount: newprod.price * newprod.quantity },
        ]);
        showAndHide("success", "Item added to cart")
      }
    } catch (error) {
      showAndHide("error", error.message)
    }
  };

  function updateQuantity(id, newQuantity) {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);
    const updatedCartItems = [...cartItems];
    const itemToBeUpdated = updatedCartItems[existingItemIndex];
    itemToBeUpdated.quantity = newQuantity;
    itemToBeUpdated.amount = itemToBeUpdated.price * itemToBeUpdated.quantity;
    setCartItems(updatedCartItems);
  }

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    showAndHide("success", "Item removed from cart")
  };

  // const fetchProducts = async () => {
  //   const response = await fetch("http://localhost:3000/products");
  //   const data = await response.json();
  //   setProduct(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <EcomContext.Provider
      value={{
        product: products,
        featured,
        topSelling,
        addToCart,
        cartItems,
        updateQuantity,
        calculateTotalAmount,
        removeFromCart,
        alertInfo,
        showAndHide,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;
