import { INCREMENT, DECREMENT, REMOVE, ADDREVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addreview = (values) => ({ type: ADDREVIEW, payload: { values } });
