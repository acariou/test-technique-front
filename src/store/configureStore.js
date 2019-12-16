import { 
    createStore, 
    applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// TODO test pour prod
const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware, 
      loggerMiddleware)
    ),
    initialState
  );

}