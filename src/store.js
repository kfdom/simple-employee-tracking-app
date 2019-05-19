import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const initialState = {};

const logger = createLogger({ collapsed: true });

const middleware = [thunk];

if (process.env.ENVIRONMENT !== 'production') {
  middleware.push(logger);
}

console.log(process.env.ENVIRONMENT);

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
