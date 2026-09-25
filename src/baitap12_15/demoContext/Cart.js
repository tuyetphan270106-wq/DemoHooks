import React from "react";
import { useCart } from "./CartContext";

function Cart() {
    const {
        cartItems,
        removeFromCart,
        clearCart,
        totalItems,
        totalValue
    } = useCart();

    return (
        <div>
            <h2>Cart</h2>

            <p>
                Total Items: {totalItems}
            </p>

            <p>
                Total Value: ${totalValue.toFixed(2)}
            </p>

            {cartItems.map((item, index) => (
                <div key={index}>
                    <p>
                        {item.name} - ${item.price}
                    </p>

                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                </div>
            ))}

            <br />

            <button onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    );
}

export default Cart;