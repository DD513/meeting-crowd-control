import { takeLatest, call, all, put } from "redux-saga/effects";
import { GET_PythonData } from "../../services/home";
import { message } from "antd";
import { effectError } from "../../utils/handleError";

export function* GET_HomeData({ loading, callback }) {
  try {
    if (loading) loading(true);
    const response = yield call(GET_PythonData);
    console.log("===python===", response);
    yield put({
      type: "SAVE_PythonData",
      payload: response,
    });
    message.success(response.message);
    // if (loading) loading(false);
    // if (callback) callback();
  } catch (error) {
    // if (loading) loading(false);
    yield effectError(error);
  }
}

export default function* homeSaga() {
  yield all([takeLatest("GET_PythonData", GET_HomeData)]);
}
