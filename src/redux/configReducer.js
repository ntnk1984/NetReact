import { combineReducers, applyMiddleware, createStore } from "redux";
import createMiddleWareSaga from "redux-saga";
import loginReducer from "./reducer/loginReducer";
import { rootSaga } from "./saga/rootSaga";
const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    loginReducer,
});
const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga);
export default store;