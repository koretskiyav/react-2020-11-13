import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  visited: [],
};

const reducer = produce((draft = initialState, action) => {
  const { type, response, error, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = {
        ...draft.entities,
        ...arrToMap(response),
      };
      draft.loading = false;
      draft.loaded = true;
      draft.visited.push(payload?.restaurantId);
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});

export default reducer;
