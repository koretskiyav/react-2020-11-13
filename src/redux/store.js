import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';
import uuidGenerator from './middleware/uuid-generator';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, uuidGenerator))
);

export default store;
