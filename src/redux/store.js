import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
