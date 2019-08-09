import { all } from "redux-saga/effects";

import repo from "./repo/sagas";

export default function* rootSaga() {
  return yield all([repo]);
}
