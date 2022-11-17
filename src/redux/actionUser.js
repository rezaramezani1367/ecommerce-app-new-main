import { Toast } from "./actionCart";
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
        ...getState().user,
        userLoading: false,
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
        ...getState().user,
        userLoading: false,
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
        ...getState().user,
        userLoading: false,
        userError: error.response ? error.response.data.message : error.message,
      },
    });
  }
};
export const getProfile = (values) => async (dispatch, getState) => {
  dispatch({
    type: userLoading,
    payload: { ...getState().user, userLoading: true },
  });
  try {
    const { data } = await client.get("/user/profile/", {
      headers: {
        authorization: `Bearer ${values.token}`,
      },
    });
    dispatch({
      type: userSuccess,
      payload: {
        userLoading: false,
        userData: data.user,
        userError: "",
      },
    });
  } catch (error) {
    dispatch({
      type: userError,
      payload: {
        ...getState().user,
        userLoading: false,
        userError: error.response ? error.response.data.message : error.message,
      },
    });
  }
};
export const changeProfile = (values) => async (dispatch, getState) => {
  dispatch({
    type: userLoading,
    payload: { ...getState().user, userLoading: true },
  });
  try {
    const data = await client.put(
      "/user/change-profile",
      {
        ...values,
        age: Number(values.age),
      },
      {
        headers: {
          authorization: `Bearer ${values.token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: userSuccess,
      payload: {
        userData: { ...values },
        userLoading: false,
        userError: "",
      },
    });
    console.log(getState().user);
  } catch (error) {
    dispatch({
      type: userError,
      payload: {
        ...getState().user,
        userLoading: false,
        userError: error.response ? error.response.data.message : error.message,
      },
    });
  }
};
export const ChangePasswordUser = (values) => async (dispatch, getState) => {
  dispatch({
    type: userLoading,
    payload: { ...getState().user, userLoading: true },
  });
  try {
    const data = await client.put(
      "/user/change-password",
      {
        ...values,
      },
      {
        headers: {
          authorization: `Bearer ${values.token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: userSuccess,
      payload: {
        ...getState().user,
        userLoading: false,
        userError: "",
      },
    });
    Toast.fire({
      icon: "success",
      title: `${values.username} change password successfully`,
    });
    console.log(getState().user);
  } catch (error) {
    console.log(error);
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;
    dispatch({
      type: userError,
      payload: {
        ...getState().user,
        userLoading: false,
        userError: errorMessage,
      },
    });
    Toast.fire({
      icon: "error",
      title: errorMessage,
    });
  }
};
