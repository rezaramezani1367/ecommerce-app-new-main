import { legacy_createStore as createStore,applyMiddleware,combineReducers  } from "redux";
import thunk from "redux-thunk";
import { products } from "./reducer";


const initialState={};
const middleWare=[thunk];
const reducers=combineReducers({products});
const store=createStore(reducers,initialState,applyMiddleware(...middleWare));
export default store;