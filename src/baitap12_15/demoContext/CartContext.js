import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (dish) => {
        setCartItems([...cartItems, dish]);
    };

    const removeFromCart = (id) => {
        setCartItems(
            cartItems.filter((item) => item.id !== id)
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.length;

    const totalValue = cartItems.reduce(
        (total, item) => total + Number(item.price),
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                totalItems,
                totalValue
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

function useCart() {
    return useContext(CartContext);
}

export { CartProvider, useCart };