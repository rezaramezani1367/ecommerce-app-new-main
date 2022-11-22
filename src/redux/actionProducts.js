import {
  productLoading,
  productSuccess,
  productError,
  client,
} from "./constants";

export const getAllProducts = () => async (dispatch, getState) => {
  dispatch({
    type: productLoading,
    payload: { ...getState().products, productLoading: true },
  });
  try {
    const { data } = await client.get("/product/");
    dispatch({
      type: productSuccess,
      payload: {
        productLoading: false,
        productData: [...data],
        productError: "",
      },
    });
    
  } catch (error) {
    dispatch({
      type: productError,
      payload: {
        ...getState().products,
        productLoading: false,
        productError: error.message,
      },
    });
  }
};
export const getProduct = (id) => async (dispatch, getState) => {
  dispatch({
    type: productLoading,
    payload: { ...getState().products, productLoading: true },
  });
  try {
    const { data } = await client.get(`/product/${id}`);
    dispatch({
      type: productSuccess,
      payload: { productLoading: false, productData: [data], productError: "" },
    });
  } catch (error) {
    dispatch({
      type: productError,
      payload: {
        ...getState().products,
        productLoading: false,
        productError: error.message,
      },
    });
  }
};
