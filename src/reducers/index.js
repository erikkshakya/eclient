import { combineReducers } from "redux";
import { ArticleReducer } from "./reducers";

export default combineReducers({
    articles:ArticleReducer,
});
