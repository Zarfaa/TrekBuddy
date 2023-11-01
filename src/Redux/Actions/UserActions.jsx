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
  RESET_USER_PASSWORD_FAIL,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL
} from "./ActionTypes";
import { toast } from "react-toastify";
import { getTokenIncludedConfig } from "./common"


// USER SIGNUP ACTION
export const registerUser = (data, setError, setLoadingStates) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("user/signup", body);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false);
  } catch (error) {
    setError(error.response.data);
    setLoadingStates(false);
    dispatch({
      type: USER_REGISTER_FAIL,
      error: error.response,
    });
  }
};


export const userLogin = (data, setLoadingStates ) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("user/login", body);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    toast.success(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.response.data.message);
    dispatch({
      type: USER_LOGIN_FAIL,
    });
  }
};



export const getUserProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`user/profile/${id}`, getTokenIncludedConfig());
    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.res.data.message)
    dispatch({
      type: USER_PROFILE_FAIL,
    });
  }
};


export const updateUserProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.put( `user/update-info/${id}`);
    dispatch({
      type: USER_PROFILE_UPDATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_UPDATE_FAIL,
      error: error.message,
    });
  }
};


// FORGOT PASSWORD ACTION
export const resetUserpassword = (data, userId, setLoadingStates) => async (dispatch) => {
  const body = JSON.stringify({ ...data, userId });
  try {
    const res = await axios.post("/user/resetPassword", body);
    dispatch({
      type: RESET_USER_PASSWORD_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
  } catch (error) {
    setLoadingStates(false)
    dispatch({
      type: RESET_USER_PASSWORD_FAIL,
    });
  }
};

export const sendUserOTP = (email, setLoadingStates) => async (dispatch) => {
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post("user/send-otp", body);
    dispatch({
      type: SEND_USER_OTP_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    localStorage.setItem("userId", res.data.userId);
  } catch (error) {
    setLoadingStates(false)
    dispatch({
      type: SEND_USER_OTP_FAIL,
    });
  }
};

export const verifyUserOTP = (otp, userId, setLoadingStates) => async (dispatch) => {
  const body = JSON.stringify({ otp, userId });
  try {
    const res = await axios.post("user/verify-otp", body);
    dispatch({
      type: VERIFY_USER_OTP_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
  } catch (error) {
    setLoadingStates(false)
    dispatch({
      type: VERIFY_USER_OTP_FAIL,
    });
  }
};



export const resendUserOTP = (data) => async (dispatch) => {
  const body = JSON.stringify({ data });
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