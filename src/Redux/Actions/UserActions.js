import axios from "../../utils/axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  SEND_USER_OTP_SUCCESS,
  VERIFY_USER_OTP_SUCCESS,
  RESEND_USER_OTP_SUCCESS,
  RESEND_USER_OTP_FAIL,
  SEND_USER_OTP_FAIL,
  VERIFY_USER_OTP_FAIL,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  RESET_USER_PASSWORD_SUCCESS,
  RESET_USER_PASSWORD_FAIL
} from "./ActionTypes";

import {getTokenIncludedConfig} from "./common"


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



export const getUserProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("users/me/", getTokenIncludedConfig());
    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
    });
  }
};



// FORGOT PASSWORD ACTION
export const resetUserpassword = (email) => async (dispatch) => {
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post("/resetPassword", body);
    dispatch({
      type: RESET_USER_PASSWORD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RESET_USER_PASSWORD_FAIL,
    });
  }
};

export const verifyUserOTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("user/verify-otp", body);
      dispatch({
        type: VERIFY_USER_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: VERIFY_USER_OTP_FAIL,
      });
    }
  };

  export const sendUserOTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("user/send-otp", body);
      dispatch({
        type: SEND_USER_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEND_USER_OTP_FAIL,
      });
    }
  };

  export const resendUserOTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("/resend-otp", body);
      dispatch({
        type: RESEND_USER_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: RESEND_USER_OTP_FAIL,
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