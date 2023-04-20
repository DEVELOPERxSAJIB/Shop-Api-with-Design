import { combineReducers } from "redux";
import shopReducer from "./shop/shopReducer";

// create root Reducer
const rootReducer = combineReducers({
    shop : shopReducer
});

// export reducer
export default rootReducer;
