import { INCREMENT, DECREMENT, REMOVE, REVIEW_ADD } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReview = (review) => ({ type: REVIEW_ADD, payload: { review } });
