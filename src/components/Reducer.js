import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Set_Photos") {
    return {
      ...state,
      Products: [action.payload],
    };
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { Products: [] });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "Set_Photos", payload: data }));
  }, []);

  console.log(state.Products);
  return (
    <div>
      {state.Products.map((value) =>
        value.map((item) => <div key={item.id}>{item.title}</div>)
      )}
    </div>
  );
};
export default Reducer;
