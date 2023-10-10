import axios from "../../utils/axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  VENDOR_LOGIN_FAIL,
  VENDOR_LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  VENDOR_REGISTER_SUCCESS,
  VENDOR_REGISTER_FAIL,
  RESET_FAIL,
  RESET_SUCCESS,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
} from "./index";


// USER SIGNUP ACTION
export const registerUser = (data, setError) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("user/signup", body);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    setError(error.res.data);
    dispatch({
      type: USER_REGISTER_FAIL,
    });
  }
};

// VENDOR SIGNUP ACTION
export const registerVendor = (data, setError) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("vendor/signup", body);
    dispatch({
      type: VENDOR_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    setError(error.response.data);
    dispatch({
      type: VENDOR_REGISTER_FAIL,
    });
  }
};
// LOGIN ACTION
export const vendorLogin = (data) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("vendor/login", body);
      dispatch({
        type: VENDOR_LOGIN_SUCCESS,
        payload: res.data,
      });
  } catch (error) {
    dispatch({
      type: VENDOR_LOGIN_FAIL,
    });
  }
};

export const userLogin = (data) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("user/login", body);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
};

/*

export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("users/me/", getTokenIncludedConfig());
    dispatch({
      type: PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_FAIL,
    });
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  try {
    const res = await axios.get("users/verify", getTokenIncludedConfig());
    dispatch({
      type: AUTHENTICATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTHENTICATE_FAIL,
    });
  }
};*/



// FORGOT PASSWORD ACTION
export const reset_password = (email, setError) => async (dispatch) => {
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post(``, body);
    dispatch({
      type: RESET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    setError(error.response.data);
    dispatch({
      type: RESET_FAIL,
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password, setError) => async (dispatch) => {
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
      const res = await axios.post(``, body);
      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      setError(error.response.data);
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

// LOGOUT ACTION
export const logout = (setRedirect) => (dispatch) => {
  setRedirect(true);
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};