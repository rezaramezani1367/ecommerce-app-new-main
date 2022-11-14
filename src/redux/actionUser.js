import { userLoading, userSuccess, userError, client } from "./constants";

export const createUser = (values) => async (dispatch, getState) => {
  dispatch({
    type: userLoading,
    payload: { ...getState().user, userLoading: true },
  });
  try {
    const data = await client.post("/user/signup/", {
      ...values,
    });

    dispatch({
      type: userSuccess,
      payload: {
        userLoading: false,
        userData: { ...data },
        userError: "",
      },
    });
  } catch (error) {
    dispatch({
      type: userError,
      payload: {
        userLoading: false,
        userData: {},
        userError: error.response ? error.response.data.message : error.message,
      },
    });
  }
};
export const loginUser = (values) => async (dispatch, getState) => {
  dispatch({
    type: userLoading,
    payload: { ...getState().user, userLoading: true },
  });
  try {
    const { data } = await client.post("/user/login/", { ...values });
    dispatch({
      type: userSuccess,
      payload: {
        userLoading: false,
        userData: data.user,
        userError: "",
      },
    });
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: userError,
      payload: {
        userLoading: false,
        userData: {},
        userError: error.response ? error.response.data.message : error.message,
      },
    });
  }
};
export const logoutUser = () => async (dispatch, getState) => {
  dispatch({
    type: userLoading,
    payload: { ...getState().user, userLoading: true },
  });
  try {
    dispatch({
      type: userSuccess,
      payload: {
        userLoading: false,
        userData: {},
        userError: "",
      },
    });
    localStorage.removeItem("user");
  } catch (error) {
    dispatch({
      type: userError,
      payload: {
        userLoading: false,
        userData: {},
        userError: error.response ? error.response.data.message : error.message,
      },
    });
  }
};
