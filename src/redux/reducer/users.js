import produce from 'immer';
import { ADD_REVIEW, LOAD_USERS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const reducer = produce((draft = {}, action) => {
  const { type, payload, userId, response } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = payload.review;
      draft[userId] = { id: userId, name };
      break;
    case LOAD_USERS + SUCCESS:
      Object.assign(draft, arrToMap(response));
      break;
    default:
      return draft;
  }
});

export default reducer;
