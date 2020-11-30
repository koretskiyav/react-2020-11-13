import { v4 as generate } from 'uuid';
import { CREATE_REVIEW } from '../constants';

const generateId = (store) => (next) => (action) => {
  if (action.type === CREATE_REVIEW) {
    next({
      ...action,
      payload: {
        ...action.payload,
        id: generate(),
      },
    });
  } else {
    next(action);
  }
};

export default generateId;
