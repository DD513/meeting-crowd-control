// export default rootReducer;
// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import counterReducer from "../counter/counterSlice";
import userReducer from "./user";
import homeReducer from "./home";
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  userReducer,
  homeReducer,
});
// Exports
export default rootReducer;
