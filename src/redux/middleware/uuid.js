import { v4 as uuidv4 } from 'uuid';

const uuid = (store) => (next) => (action) => {
  action.payload.values.userId = uuidv4();
  action.payload.values.id = uuidv4();
  next(action);
};

export default uuid;
