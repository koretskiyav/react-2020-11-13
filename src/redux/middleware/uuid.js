import { v4 as uuidv4 } from 'uuid';

const uuid = (store) => (next) => (action) => {
  const {
    payload: { values },
  } = action;

  const valuesWithId = { ...values, id: uuidv4(), userId: uuidv4() };
  next({ ...action, payload: valuesWithId });
};

export default uuid;
