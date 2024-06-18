import React, { useReducer } from "react";

const reducer = (store, action) => {
  switch (action.type) {
    case "increase": {
      if (action.payload) {
        return (store = store + action.payload);
      }
      return (store = store + 1);
      break;
    }
    case "decrease": {
      if (store > 0 || action.payload) {
        return store=store -action.payload
      } else {
        return (store = store - 1);
      }
      return store;
      break;
    }
    case "addWithPayload": {
      return (store = store + action.payload);
    }
    case "subWithPayload": {
      if (store > 0) {
        return (store = store - action.payload);
      }
      return store;
    }
    default: {
      return store;
    }
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const handleAdd = () => {
    dispatch({ type: "increase" ,payload:10});
  };
  const handleSub = () => {
    dispatch({ type: "decrease" ,payload:10 });
  };
  const handleAddPayLoad = () => {
    dispatch({ type: "addWithPayload", payload: 2 });
  };
  const handleSubPayLoad = () => {
    dispatch({ type: "subWithPayload", payload: 2 });
  };
  return (
    <div>
      <div className=" p-20 text-center mt-10">
        <h1 className=" font-bold text-xl mb-3">{state}</h1>
        <button
          onClick={handleAdd}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add
        </button>
        <button
          onClick={handleSub}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sub
        </button>
        <div>
          <button
            onClick={handleAddPayLoad}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            AddWithPayLoad
          </button>
          <button
            onClick={handleSubPayLoad}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            SubWithPayLoad
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
