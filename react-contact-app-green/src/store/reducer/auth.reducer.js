const initialState = {
  data: null,
  loading: false,
  error: null,
  auth:false
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, data:null,error:null,auth:false });
    }
    case "error": {
      return (store = { loading: false,auth:false, error: action.payload, data:null });
    }
    case "login": {
      return (store = { loading: false,auth:true, error: null, data: action.payload });
    }
    case "logout": {
      return (store = { loading: false, error: null, data: null ,auth:false});
    }
    default:
      return store;
  }
};
