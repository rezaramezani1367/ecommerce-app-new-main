import axios from "axios";
import Swal from "sweetalert2";
import { cartLoading, cartSuccess, cartError } from "./constants";
const client = axios.create({
  baseURL: "http://kzico.runflare.run",
});

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 1500,

  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const addToCart = (item) => (dispatch, getState) => {
  console.log(item);
  dispatch({
    type: cartLoading,
    payload: { ...getState().cart, cartLoading: true },
  });
  try {
    const { cartData } = getState().cart;
    const currentDataCart = cartData.filter((itm) => itm._id == item._id);
    if (currentDataCart.length) {
      const help = cartData.map((itm) => {
        if (itm._id == item._id) {
          return { ...itm, quantity: itm.quantity + 1 };
        } else {
          return itm;
        }
      });
      dispatch({
        type: cartSuccess,
        payload: {
          cartData: [...help],
          cartLoading: false,
          cartError: "",
        },
      });
      localStorage.setItem("cart", JSON.stringify(help));
    } else {
      cartData.push({ ...item, quantity: 1 });
      dispatch({
        type: cartSuccess,
        payload: {
          cartData: [...cartData],
          cartLoading: false,
          cartError: "",
        },
      });
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
  } catch (error) {
    dispatch({
      type: cartError,
      payload: { cartLoading: false, cartData: [], cartError: error.message },
    });
  }
};
export const minusFromCart = (item) => (dispatch, getState) => {
  dispatch({
    type: cartLoading,
    payload: { ...getState().cart, cartLoading: true },
  });
  try {
    const { cartData } = getState().cart;
    const currentDataCart = cartData.filter((itm) => itm._id == item._id);
    console.log(currentDataCart);
    if (currentDataCart.length && currentDataCart[0].quantity > 1) {
      const help = cartData.map((itm) => {
        if (itm._id == item._id) {
          return { ...itm, quantity: itm.quantity - 1 };
        } else {
          return itm;
        }
      });
      dispatch({
        type: cartSuccess,
        payload: {
          cartData: [...help],
          cartLoading: false,
          cartError: "",
        },
      });
      localStorage.setItem("cart", JSON.stringify(help));
    } else {
      let help = cartData.filter((itm) => itm._id !== item._id);
      dispatch({
        type: cartSuccess,
        payload: {
          cartData: [...help],
          cartLoading: false,
          cartError: "",
        },
      });
      if (help.length) {
        localStorage.setItem("cart", JSON.stringify(help));
      } else {
        localStorage.removeItem("cart");
        Toast.fire({
          icon: "error",
          title: `${item.name}  deleted from cart successfully`,
        });
      }
    }
  } catch (error) {
    dispatch({
      type: cartError,
      payload: { cartLoading: false, cartData: [], cartError: error.message },
    });
  }
};
export const removeItmeCart = (index) => (dispatch, getState) => {
  dispatch({
    type: cartLoading,
    payload: { ...getState().cart, cartLoading: true },
  });
  try {
    const { cartData } = getState().cart;

    cartData.splice(index, 1);
    console.log({cartData,index,},cartData.length)

    dispatch({
      type: cartSuccess,
      payload: {
        cartData: [...cartData],
        cartLoading: false,
        cartError: "",
      },
    });
    Toast.fire({
      icon: "error",
      title: `${cartData[index].name}  deleted from cart successfully`,
    });
    if (cartData.length) {
      localStorage.setItem("cart", JSON.stringify(cartData));
    } else {
      localStorage.removeItem("cart");
    }
  } catch (error) {
    dispatch({
      type: cartError,
      payload: { cartLoading: false, cartData: [], cartError: error.message },
    });
  }
};
