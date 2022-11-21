import { Toast } from "./actionCart";
import { orderLoading, orderSuccess, orderError, client } from "./constants";

export const submitOrder = (values) => async (dispatch, getState) => {
    console.log(values)
  dispatch({
    type: orderLoading,
    payload: { ...getState().order, orderData: [], orderLoading: true },
  });
  try {
    const { data } = await client.post(
      "/order/submit",
      {
        ...values,
      },
      {
        headers: {
          authorization: `Bearer ${values.token}`,
        },
      }
    );
    dispatch({
      type: orderSuccess,
      payload: {
        orderLoading: false,
        orderData: [...data],
        orderError: "",
      },
    });
    Toast.fire({
        icon: "success",
        title: "order submitted successfully",
      });
      localStorage.removeItem('cart')
      console.log(getState().order)
  } catch (error) {
    console.log(error)
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;
    dispatch({
      type: orderError,
      payload: {
        ...getState().orders,
        orderLoading: false,
        orderError: errorMessage,
      },
    });
    Toast.fire({
      icon: "error",
      title: errorMessage,
    });
  }
};
