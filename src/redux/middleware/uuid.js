import { v4 as uuidv4 } from 'uuid';
import { SUBMIT } from '../constants';

const uuid = (store) => (next) => (action) => {
  const {
    payload: { values },
    type,
  } = action;

  switch (type) {
    case SUBMIT:
      const valuesWithId = { ...values, id: uuidv4(), userId: uuidv4() };
      next({ ...action, payload: valuesWithId });
      break;
    default:
      next(action);
  }
};

export default uuid;
