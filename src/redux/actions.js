import { INCREMENT, DECREMENT, RESET } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const removeAll = (id) => ({ type: RESET, payload: { id } });
