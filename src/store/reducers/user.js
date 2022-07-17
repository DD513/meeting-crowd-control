const initialState = {
  user: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE_User":
      return { ...state, user: payload };
    default:
      return state;
  }
};
