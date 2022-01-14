import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../Reducers/authReducer";
import { uiReducer } from '../Reducers/uiReducer';
import { notesReducer } from '../Reducers/notesReducer';

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer
});

export const store = createStore(
  reducers,
  composeEnhancers( applyMiddleware(thunk) )
);
