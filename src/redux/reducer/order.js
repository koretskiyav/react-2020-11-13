import {
  DECREMENT,
  INCREMENT,
  PUSH_ORDER,
  REMOVE,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

// { [productId]: amount }
const reducer = (state = {}, action) => {
  const { type, payload, json } = action;

  switch (type) {
    case PUSH_ORDER + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PUSH_ORDER + SUCCESS:
      return { ...state, entities: {}, loading: false };
    case PUSH_ORDER + FAILURE:
      return {
        ...state,
        loading: false,
        error: json,
      };
    case INCREMENT:
      const entities = {
        ...state.entities,
        [payload.id]:
          (state.entities ? state.entities[payload.id] || 0 : 0) + 1,
      };
      return { ...state, entities };
    case DECREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: Math.max(
            (state.entities ? state.entities[payload.id] || 0 : 0) - 1,
            0
          ),
        },
      };
    case REMOVE:
      return {
        ...state,
        entities: { ...state.entities, [payload.id]: 0 },
      };
    default:
      return state;
  }
};

export default reducer;
