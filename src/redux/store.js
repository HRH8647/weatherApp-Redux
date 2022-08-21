import {createStore, applyMiddleware} from "redux";
import formReducer from "./form/formReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const story = createStore(formReducer, applyMiddleware(thunk, logger))

export default story;