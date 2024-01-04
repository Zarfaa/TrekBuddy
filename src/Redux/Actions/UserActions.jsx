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



// USER SIGNUP ACTION
export const registerUser = (data, setError,setSignupSuccess, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("user/signup", data);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false);
    setSignupSuccess(true);
    toast.success(res.data.message)
  } catch (error) {
    setError(error.response.data);
    setLoadingStates(false);
    dispatch({
      type: USER_REGISTER_FAIL,
      error: error.response,
    });
    toast.error(error.response.data.message)
  }
};


export const userLogin = (data, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("user/login", data);
    
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("loginId", res.data.data.user._id);
    setLoadingStates(false);
    toast.success(res.data.message);
  } catch (error) {
    setLoadingStates(false);
    dispatch({
      type: USER_LOGIN_FAIL
    });
    toast.error(error.response.data.message);
  }
};


export const getUserProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`user/profile/${id}`);
    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: res.data,
    });
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.response.data.message)
    dispatch({
      type: USER_PROFILE_FAIL,
    });
  }
};


export const updateUserProfile = (id, data, setLoadingStates) => async (dispatch) => {
  const body = JSON.stringify(data);
  try {
    const res = await axios.put(`user/update-info/${id}`, body);
    dispatch({
      type: USER_PROFILE_UPDATE_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false);
    toast.success(res.data.message)
  } catch (error) {
    setLoadingStates(false);
    toast.error(error.response.data.message)
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
    toast.success(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.response.data.message)
    dispatch({
      type: RESET_USER_PASSWORD_FAIL,
    });
  }
};

export const sendUserOTP = (email, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("user/send-otp", {email});
    dispatch({
      type: SEND_USER_OTP_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    localStorage.setItem("userId", res.data.userId);
    toast.success(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.response.data.message)
    dispatch({
      type: SEND_USER_OTP_FAIL,
    });
  }
};


export const resendUserOTP = (email, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("user/resend-otp", {email});
    dispatch({
      type: RESEND_USER_OTP_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    toast.success(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.response.data.message)
    dispatch({
      type: RESEND_USER_OTP_FAIL,
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
    toast.success(res.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.response.message)
    dispatch({
      type: VERIFY_USER_OTP_FAIL,
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