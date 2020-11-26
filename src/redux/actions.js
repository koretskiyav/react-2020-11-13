import { INCREMENT, DECREMENT, DISCARD } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const discard = (id) => ({ type: DISCARD, payload: { id } });
