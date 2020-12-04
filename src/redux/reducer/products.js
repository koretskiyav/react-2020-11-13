import produce from 'immer';
import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, response, error, restaurantId } = action;

    switch (type) {
      case LOAD_PRODUCTS + REQUEST: {
        draft.loading[restaurantId] = true;
        break;
      }
      case LOAD_PRODUCTS + SUCCESS: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = true;
        draft.error = null;
        draft.entities = { ...draft.entities, ...arrToMap(response) };
        break;
      }
      case LOAD_PRODUCTS + FAILURE: {
        draft.loading[restaurantId] = false;
        draft.loaded[restaurantId] = false;
        draft.error = error;
        break;
      }
      default:
        return;
    }
  });
export default reducer;
