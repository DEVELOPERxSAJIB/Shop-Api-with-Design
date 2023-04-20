import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';

// redux middleware
const middleware = [thunk];

// create redux store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
