import * as Types from "./types";

export function repoRequest(user) {
  return {
    type: Types.REQUEST,
    payload: user
  };
}

export function repoSuccess(data) {
  return {
    type: Types.SUCCESS,
    payload: data
  };
}

export function repoFailure() {
  return {
    type: Types.FAILURE
  };
}
