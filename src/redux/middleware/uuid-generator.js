import { v1 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

const uuidGenerator = () => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    action.payload.userId = uuidv4();
    action.payload.id = uuidv4();
  }
  next(action);
};

export default uuidGenerator;
