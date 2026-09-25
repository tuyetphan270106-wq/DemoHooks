import React, { useReducer } from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;

        case "RESET":
            return 0;

        default:
            return state;
    }
}

function Counter() {
    const [count, dispatch] = useReducer(counterReducer, 0);

    return (
        <div>
            <h2>Counter</h2>

            <h3>{count}</h3>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                +
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                -
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>
        </div>
    );
}

export default Counter;