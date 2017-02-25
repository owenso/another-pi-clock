import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, applyMiddleware(...middlewares));
