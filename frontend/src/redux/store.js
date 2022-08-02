import { combineReducers } from "redux";
import userStore from "./user_reducer";

const store = combineReducers({
  userStore,
});

export default store;
