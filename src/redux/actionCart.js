import axios from "axios";
import { cartLoading, cartSuccess, cartError } from "./constants";
const client = axios.create({
    baseURL: "http://kzico.runflare.run",
  });

  export const addToCart = (item) =>  (dispatch, getState) => {
    dispatch({
      type: cartLoading,
      payload: { ...getState().cart, cartLoading: true },
    });
    try {
        const {cartData}=getState().cart;
        console.log(cartData);



        // dispatch({
        //   type: cartSuccess,
        //   payload: { cartLoading: false,cartData:[...data], cartError:''},
        // });
      // console.log(data)
    } catch (error) {
      dispatch({
          type: cartError,
          payload: { cartLoading: false,cartData:[], cartError:error.message},
        });
    }
  };