// Imports: Dependencies
import { all } from "redux-saga/effects";
// import userSaga from "./user";
const sagaArray = [];

sagaArray.push(require("./user").default());

export function* rootSaga() {
  yield all(sagaArray);
}
