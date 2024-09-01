// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (recipe) => {
//     setCart((prevCart) => [...prevCart, recipe]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (recipe) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(item => item.id === recipe.id);
      if (existingItemIndex !== -1) {
        // If the item is already in the cart, increase the quantity
        const updatedCart = prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      } else {
        // If the item is new, add it to the cart with a quantity of 1
        return [...prevCart, { ...recipe, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (index, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item, i) =>
        i === index ? { ...item, quantity: quantity } : item
      );
      return updatedCart;
    });
  };
  

  const removeItemFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItemQuantity, removeItemFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
