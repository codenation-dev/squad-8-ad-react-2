import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import * as Types from "./types";

import { repoSuccess, repoFailure } from "./actions";

export function* getRepo({ payload }) {
  try {
    const response = yield call(api.get, `/${payload}/repos`);

    const { data } = response;

    yield put(repoSuccess(data));
  } catch (err) {
    toast.error("Usuario não encontrado, verifique seus dados");
    yield put(repoFailure());
  }
}

export default all([takeLatest(Types.REQUEST, getRepo)]);
