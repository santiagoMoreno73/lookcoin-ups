const isBrowser = typeof window !== "undefined";

export const initialState = {
  user: isBrowser ? sessionStorage.getItem("LOGIN") : null,
  userCoins: [],
  signup: null,
};

export const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("LOGIN", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER":
      return {
        ...state,
      };

    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
      };

    case "FAVORITES":
      localStorage.setItem("FAVORITES", action.payload);
      return {
        ...state,
        userCoins: action.payload,
      };
    default:
      return state;
  }
};
