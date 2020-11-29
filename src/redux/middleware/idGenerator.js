import { v4 as uuidv4 } from 'uuid';

const idGenerator = (store) => (next) => (action) => {
  action.payload.id = uuidv4();
  action.payload.userId = uuidv4();

  next(action);
  console.log('after: ', store.getState());
};

export default idGenerator;
