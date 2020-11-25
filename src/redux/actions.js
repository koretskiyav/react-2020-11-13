import { INCREMENT, DECREMENT, DELETING } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const deleting = (id) => ({ type: DELETING, payload: { id } });
