import { INCREMENT, DECREMENT, DELETING, ADD_DATA } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const deleting = (id) => ({ type: DELETING, payload: { id } });
export const addData = (data) => ({ type: ADD_DATA, payload: { data } });
