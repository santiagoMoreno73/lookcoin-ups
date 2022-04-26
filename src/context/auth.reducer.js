const isBrowser = typeof window !== "undefined";

export const initialState = {
  user: isBrowser ? sessionStorage.getItem("LOGIN") : {},
  signup: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("LOGIN", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    // case "USER_STATE":
    //   return {
    //     ...state,
    //     user_state: action.payload,
    //   };

    case "REGISTER":
      return {
        ...state,
      };

    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
