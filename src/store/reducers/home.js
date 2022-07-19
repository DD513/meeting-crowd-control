const initialState = {
  data: [],
};

const pythonData = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE_PythonData":
      return { data: payload };
    default:
      return state;
  }
};

export default pythonData;
