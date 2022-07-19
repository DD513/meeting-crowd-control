import request from "../utils/request";

export function GET_PythonData() {
  console.log("===pythonSaga===");
  return request.get("/data", null, {});
}
