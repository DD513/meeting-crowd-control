// Imports: Dependencies
import { all } from "redux-saga/effects";
// import userSaga from "./user";
const sagaArray = [];

sagaArray.push(require("./user").default());
sagaArray.push(require("./home").default());

export function* rootSaga() {
  yield all(sagaArray);
}
