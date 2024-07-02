const initialState = {
  loading: false,
  data: null,
  error: null,
  auth: false,
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, data: null, error: null, auth: null });
    }
    case "login": {
      return (store = {
        loading: false,
        data: action.payload,
        error: null,
        auth: null,
      });
    }
    case "error": {
      return (store = {
        loading: false,
        data: null,
        error: action.payload,
        auth: false,
      });
    }
    default:
      return store;
  }
};
