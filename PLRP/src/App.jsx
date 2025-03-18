import React, { useState, useReducer } from "react";

// Simple Counter with useState
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h5 className="card-title">Count: {count}</h5>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

// Toggle Component
function ToggleContent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <button
          className="btn btn-outline-info"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <p className="mt-2">Content</p>}
      </div>
    </div>
  );
}

// Like Button Component
function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <button
          className="btn btn-outline-danger"
          onClick={() => setLikes(likes + 1)}
        >
          {likes === 1 ? "like" : "likes"} ♥ {likes}
        </button>
      </div>
    </div>
  );
}

// Cart Item with useReducer
function CartItem() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increment":
          return { quantity: state.quantity + 1 };
        case "decrement":
          return { quantity: Math.max(1, state.quantity - 1) };
        default:
          return state;
      }
    },
    { quantity: 1 }
  );

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <p>Quantity Must Be 1 at least</p>
        <div className="btn-group">
          <button
            className="btn btn-outline-dark"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
          <span className="btn">{state.quantity}</span>

          <button
            className="btn btn-outline-dark"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

// Counter with useReducer Component
function CounterWithReducer() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        default:
          return state;
      }
    },
    { count: 0 }
  );

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h5 className="card-title">{state.count}</h5>
        <div className="btn-group">
          <button
            className="btn btn-outline-dark"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

// Theme Toggle with useReducer
function ThemeToggle() {
  const [isDark, dispatch] = useReducer((state) => !state, false);

  return (
    <div className={`card shadow-sm ${isDark ? "bg-dark text-white" : ""}`}>
      <div className="card-body text-center">
        <button
          className={`btn ${isDark ? "btn-light" : "btn-dark"}`}
          onClick={dispatch}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center h3 mb-4">Components</h1>
      <div className="row g-4">
        <div className="col-sm-6 col-lg-4">
          <p className="mb-2">
            <strong>Counter with useState:</strong> A simple counter that
            increments when the "+" button is clicked.
          </p>
          <Counter />
        </div>
        <div className="col-sm-6 col-lg-4">
          <p className="mb-2">
            <strong>Toggle Content:</strong> A button toggles the visibility of
            the content below it.
          </p>
          <ToggleContent />
        </div>
        <div className="col-sm-6 col-lg-4">
          <p className="mb-2">
            <strong>Like Button:</strong> A button that increments the number of
            likes when clicked that must be like when the number of it == 1
            likes if more than one or equal to zero
          </p>
          <LikeButton />
        </div>
        <div className="col-sm-6 col-lg-4">
          <p className="mb-2">
            <strong>Cart Item with useReducer:</strong> A component to manage
            item quantity in a cart. Quantity cannot go below 1.
          </p>
          <CartItem />
        </div>
        <div className="col-sm-6 col-lg-4">
          <p className="mb-2">
            <strong>Counter with useReducer:</strong> A counter using useReducer
            to manage state with increment and decrement actions.
          </p>
          <CounterWithReducer />
        </div>
        <div className="col-sm-6 col-lg-4">
          <p className="mb-2">
            <strong>Theme Toggle:</strong> A button to toggle between light and
            dark themes.
            <br />
            <span className="bg-danger ">Bonus useReducer To make it</span>
          </p>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
