import { legacy_createStore as createStore,applyMiddleware,combineReducers  } from "redux";
import thunk from "redux-thunk";
import { products,cart } from "./reducer";

const newCart=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
const initialState={
    cart:{ cartLoading: false, cartData: [...newCart], cartError: ""}
};
const middleWare=[thunk];
const reducers=combineReducers({products,cart});
const store=createStore(reducers,initialState,applyMiddleware(...middleWare));
export default store;