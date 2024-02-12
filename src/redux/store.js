import { createStore } from "redux";
import todoReducer from "./reducer";
// import composeWithDevTools from "redux-devtools-extension"

const store = createStore(todoReducer);

export default store;
