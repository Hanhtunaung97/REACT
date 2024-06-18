const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return (state = state + 1);
      break;
    }
    case "decrease": {
      if (state > 0) {
        return (state = state - 1);
      }
      return state;
      break;
    }
    default: {
      return state;
    }
  }
};
export default counterReducer;
