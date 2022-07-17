// Imports: Dependencies
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas/index";

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware, createLogger())
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export { store };
