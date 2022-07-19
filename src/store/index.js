// Imports: Dependencies
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas/index";

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, sagaMiddleware, createLogger()],
});
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export { store };
