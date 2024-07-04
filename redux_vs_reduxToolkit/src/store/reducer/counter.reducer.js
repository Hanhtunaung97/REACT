const initialState = {
  value: 0,
};
export const counterReducer = (store = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return (store = { value: store.value + 1 });
    }
    case "decrease": {
      return (store = { value: store.value - 1 });
    }
    default:
      return store;
  }
};
