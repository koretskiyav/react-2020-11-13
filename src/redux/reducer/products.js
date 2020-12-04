import produce from 'immer';
import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

const reducer = (state = initialState, action) => {
  const { type, restaurantId, response, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return produce(state, (draft) => {
        draft.loading[restaurantId] = true;
        draft.error[restaurantId] = null;
      });
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
        Object.assign(draft.entities, arrToMap(response));
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
      });
    case LOAD_PRODUCTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error[restaurantId] = error;
      });
    default:
      return state;
  }
};

export default reducer;
