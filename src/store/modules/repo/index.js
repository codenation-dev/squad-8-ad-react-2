import produce from "immer";
import * as Types from "./types";

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function repo(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.REQUEST: {
        draft.loading = true;
        break;
      }

      case Types.SUCCESS: {
        draft.data = action.payload.map(repo => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description,
          owner: {
            login: repo.owner.login,
            avatar_url: repo.owner.avatar_url
          },
          homepage: repo.homepage,
          language: repo.language,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at
        }));
        draft.loading = false;
        break;
      }

      case Types.FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
