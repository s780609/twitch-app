import { applyMiddleware } from "redux";
import { createStore } from "redux";
import reducer from "./reducer";

export default createStore(
    reducer,
    //   composeWithDevTools(applyMiddleware(thunk))
);