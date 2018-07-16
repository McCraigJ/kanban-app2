import { combineReducers } from "redux";
import lanes from "./lanesReducer";
import notes from "./notesReducer";

export default combineReducers({
  lanes,
  notes
});