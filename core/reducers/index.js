import { combineReducers } from "redux";
import todos from "../features/todosSlice";
import visibilityFilter from "../features/filtersSlice";

export default combineReducers({
  todos,
  visibilityFilter,
});
