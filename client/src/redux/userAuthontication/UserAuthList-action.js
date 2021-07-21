import * as userauthtype from "./UserAuthList-type";

import * as api from "../../api/index";

export const Signin = (user, history) => async (dispatch) => {
  try {
    dispatch({ type: userauthtype.USER_LOADING });

    const currentUser = await api.getUser(user);

    dispatch({
      type: userauthtype.USER_LOADED,
      payload: {
        user: currentUser.data.data.user,
        token: currentUser.data.token,
      },
    });
    history.push("/femme");
  } catch (error) {
    console.log(error.response);
    dispatch({ type: userauthtype.AUTH_ERROR });
    dispatch({
      type: userauthtype.GET_ERRORS,
      payload: error.response.data.message,
    });
    setTimeout(() => {
      dispatch({ type: userauthtype.CLEAR_ERRORS });
    }, 5000);
  }
};

export const loggOut = (history) => async (dispatch) => {
  try {
    await api.logOut();
    dispatch({
      type: userauthtype.LOGOUT_SUCCESS,
    });
    history.push("/login");
  } catch (error) {
    console.log(error);
  }
};

export const Signup = (user, history) => async (dispatch) => {
  try {
    dispatch({ type: userauthtype.USER_LOADING });

    const newUser = await api.createUser(user);

    dispatch({
      type: userauthtype.REGISTER_SUCCESS,
      payload: {
        user: newUser.data.data.user,
        token: newUser.data.token,
      },
    });
    history.push("/femme");
  } catch (error) {
    console.log(error.response);
    dispatch({ type: userauthtype.REGISTER_FAIL });
    dispatch({
      type: userauthtype.GET_ERRORS,
      payload: error.response.data.message,
    });
    setTimeout(() => {
      dispatch({ type: userauthtype.CLEAR_ERRORS });
    }, 5000);
  }
};

export const updatePassword = (history, dat) => async (dispatch) => {
  try {
    await api.updatePass(dat);
    await api.logOut();
    dispatch({
      type: userauthtype.LOGOUT_SUCCESS,  
    });
    history.push("/login");
  } catch (error) {
    console.log(error.response);
  }
};

export const updatePhoto = (history, dat) => async (dispatch) => {
  try {
    const updated = await api.updatePh(dat);
    dispatch({
      type: userauthtype.UPDATE_PHOTO,
      payload: updated.data.data.user 
    });
  } catch (error) {
    console.log(error.response);
  }
};
