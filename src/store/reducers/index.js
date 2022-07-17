// export default rootReducer;
// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import counterReducer from "../counter/counterSlice";
import userReducer from "./user";
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  userReducer,
});
// Exports
export default rootReducer;
