import { userLoading, userSuccess, userError, client } from "./constants";

export const createUser =
  ({ username, email, password, mobile }) =>
  async (dispatch, getState) => {
    dispatch({
      type: userLoading,
      payload: { ...getState().user, userLoading: true },
    });
    try {
      
      const data  = await client.post("/user/signup/", {
        username,
        email,
        password,
        mobile,
      });
      console.log(data)
      dispatch({
        type: userSuccess,
        payload: {
          userLoading: false,
          userData: {...data},
          userError: "",
        },
      });
      localStorage.getItem('user',JSON.stringify(data));
    } catch (error) {
      console.log(error)
      dispatch({
        type: userError,
        payload: {
          userLoading: false,
          userData: [],
          userError: error.response?error.response.data.message:error.message,
        },
      });
    }
  };
