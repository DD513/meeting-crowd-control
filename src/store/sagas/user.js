import { takeLatest, call, all, put } from "redux-saga/effects";
import { POST_login, POST_signUp, GET_user } from "../../services/user";
import { setToken, cleanToken, getToken } from "../../utils/token";
import { message } from "antd";
import { effectError } from "../../utils/handleError";

export function* POST_UserLogout() {
  try {
    yield cleanToken();
    message.config({
      maxCount: 1,
    });
    message.success("您已登出！");
  } catch (error) {
    console.log(error);
  }
}

export function* POST_UserLogin({ payload, callback, loading }) {
  try {
    if (loading) loading(true);
    const response = yield call(POST_login, payload);
    yield setToken(response.token);
    message.success(response.message);
    window.location.replace("/");
    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield effectError(error);
  }
}

export function* POST_UserSignUp({ payload, callback, loading }) {
  try {
    if (loading) loading(true);
    console.log("im", payload);
    const response = yield call(POST_signUp, payload);
    message.success(response.message);
    window.location.replace("/");
    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield effectError(error);
  }
}

export function* GET_User({ loading, callback }) {
  try {
    if (loading) loading(true);
    const token = yield getToken();
    const response = yield call(GET_user, token);
    console.log("===GetUser===", response.user);
    yield put({
      type: "SAVE_User",
      payload: response.user,
    });
    message.success(response.message);
    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield effectError(error);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest("POST_UserLogin", POST_UserLogin),
    takeLatest("POST_UserLogout", POST_UserLogout),
    takeLatest("POST_UserSignUp", POST_UserSignUp),
    takeLatest("GET_User", GET_User),
  ]);
}
