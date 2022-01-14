import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../Reducers/authReducer";
import { uiReducer } from '../Reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

export const store = createStore(
  reducers,
  composeEnhancers( applyMiddleware(thunk) )
);
