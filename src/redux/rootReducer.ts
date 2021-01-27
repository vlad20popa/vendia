import { combineReducers } from "redux";
import {testReducer} from "./reducers/testReducer";

const rootReducer = combineReducers({
    message: testReducer
  }
);

export default rootReducer;