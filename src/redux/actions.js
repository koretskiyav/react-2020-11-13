import { INCREMENT, DECREMENT, REMOVE, CREATE_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const createReview = (values, meta) => ({
  type: CREATE_REVIEW,
  payload: { ...values },
  meta,
});
