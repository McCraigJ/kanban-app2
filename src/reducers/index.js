import { ADD_NOTE } from "../constants/action-types";

const initialState = {
  test: 1,
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };      
      //return { articles: [...state.articles, action.payload] };      
    default:
      return state;
  }
};
export default rootReducer;