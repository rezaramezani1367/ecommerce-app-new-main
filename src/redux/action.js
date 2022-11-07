import axios from "axios";
import { productLoading, productSuccess, productError } from "./constants";

const client = axios.create({
  baseURL: "http://kzico.runflare.run",
});

export const getAllProducts = () => async (dispatch, getState) => {
  dispatch({
    type: productLoading,
    payload: { ...getState().products, productLoading: true },
  });
  try {
      const {data}=await client.get('/product/');
      dispatch({
        type: productSuccess,
        payload: { productLoading: false,productData:[...data], productError:''},
      });
    // console.log(data)
  } catch (error) {
    dispatch({
        type: productError,
        payload: { productLoading: false,productData:[], productError:error.message},
      });
  }
};
export const getProduct = (id) => async (dispatch, getState) => {
  dispatch({
    type: productLoading,
    payload: { ...getState().products, productLoading: true },
  });
  try {
      const {data}=await client.get(`/product/${id}`);
      dispatch({
        type: productSuccess,
        payload: { productLoading: false,productData:[data], productError:''},
      });
    console.log(getState().products)
  } catch (error) {
    dispatch({
        type: productError,
        payload: { productLoading: false,productData:[], productError:error.message},
      });
  }
};
