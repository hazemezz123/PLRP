import React from "react";
import { useReducer } from "react";
const initState = { count: 0, Dollar: 10 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, Dollar: state.Dollar + 20 };
    case "decrement":
      return { count: state.count - 1, Dollar: state.Dollar - 20 };
    case "Double-increment":
      return { count: state.count + 2, Dollar: state.Dollar + 40 };
    case "Double-decrement":
      return { count: state.count - 2, Dollar: state.Dollar - 40 };
    case "Rest":
      return { count: 0, Dollar: 0 };
    default:
      throw new Error();
  }
}
const useReducerState = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>Use Reducer</h1>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "Double-decrement" })}>
          --
        </button>
        <p>{state.count}</p>
        <br />
        <p>$ {state.Dollar}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "Double-increment" })}>
          ++
        </button>
        <button onClick={() => dispatch({ type: "Rest" })}>Rest</button>
      </div>
    </div>
  );
};

export default useReducerState;
