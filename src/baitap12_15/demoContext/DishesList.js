import React from 'react'
import dishes from "./dishes";
import { useCart } from './CartContext';

function DishesList() {
    const { addToCart } = useCart();
    return (
        <div>
            <h2>Dishes List</h2>

            {dishes.map((dish) => (
                <div key={dish.id}>
                    <h3>{dish.name}</h3>

                    <p>{dish.description}</p>

                    <p>
                        Price: ${dish.price}
                    </p>

                    <button onClick={() => addToCart(dish)}>
                        Add to Cart
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default DishesList
