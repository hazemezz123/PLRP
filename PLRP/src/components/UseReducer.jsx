import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="container mx-auto">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 3 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default UseReducer;
