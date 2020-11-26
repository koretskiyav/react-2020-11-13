import { INCREMENT, DECREMENT, DELETEPRODUCT } from './constants';

export const increment = (id) => {
  console.log('action increment, id=', id);
  return { type: INCREMENT, payload: { id } };
};

export const decrement = (id) => {
  console.log('action decrement, id=', id);
  return { type: DECREMENT, payload: { id } };
};

export const deleteProduct = (id) => {
  console.log('action deleteProductt, id=', id);
  return { type: DELETEPRODUCT, payload: { id } };
};
