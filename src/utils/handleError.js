import _ from "lodash";
import { message } from "antd";
import { put } from "redux-saga/effects";
import { POST_UserLogout } from "../store/sagas/user";

// eslint-disable-next-line require-yield
export function* effectError(error) {
  const errMsg = _.get(error, "response.data.message", null);
  const errorStatus = _.get(error, "response.status");
  console.log("err", errMsg, errorStatus);
  switch (errorStatus) {
    case 401:
      yield put({ POST_UserLogout });
      break;
    default:
      message.config({
        maxCount: 1,
      });
      message.error(errMsg);
      break;
  }
}
