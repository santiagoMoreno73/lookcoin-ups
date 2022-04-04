export const initialState = {
  user: null,
  signup: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
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
