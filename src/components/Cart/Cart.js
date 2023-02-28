import React, { useState, useEffect, createContext } from 'react';
export const CartContext = createContext();

function Cart({children}) {
    // Define state for the shopping cart
const [cart, setCart] = useState([]);

    // Load cart data from local storage on component mount
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Define the add to cart function
    function addToCart(product, quantity = 1) {
        // Get the cart from local storage or initialize it as an empty array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
      
        // Check if the product is already in the cart
        const index = cart.findIndex(item => item.idProduct === product.idProduct);
        if (index !== -1) {
          // If it is, update the quantity of the existing product
          cart[index].quantity += quantity;
          const item = cart.splice(index, 1)[0];
          cart.unshift(item);
        } else {
          // If it isn't, add the product to the cart with the given quantity
          cart.unshift({
            ...product,
            quantity,
          });
        }
      
        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
      
        // Update the state of the cart
        setCart(cart);
    }

    function removeFromCart(idProduct) {
      // Get the cart from local storage or initialize it as an empty array
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
      // Find the index of the product to be removed in the cart array
      const index = cart.findIndex(item => item.idProduct === idProduct);
    
      if (index !== -1) {
        // If the product is found in the cart, remove it from the array
        cart.splice(index, 1);
    
        // Save the updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    
        // Update the state of the cart
        setCart(cart);
      }
    }
      
      
      

    //Return
    return (
        <CartContext.Provider value={{addToCart,removeFromCart, cart}}>
            {children}
        </CartContext.Provider>
    );
}

export default Cart;