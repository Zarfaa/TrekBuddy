import axios from "../../utils/axios";
import {
  VENDOR_LOGIN_FAIL,
  VENDOR_LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  VENDOR_REGISTER_SUCCESS,
  VENDOR_REGISTER_FAIL,
  SEND_VENDOR_OTP_SUCCESS,
  VERIFY_VENDOR_OTP_SUCCESS,
  RESEND_VENDOR_OTP_SUCCESS,
  RESEND_VENDOR_OTP_FAIL,
  SEND_VENDOR_OTP_FAIL,
  VERIFY_VENDOR_OTP_FAIL,
  VENDOR_PROFILE_SUCCESS,
  VENDOR_PROFILE_FAIL,
  RESET_VENDOR_PASSWORD_SUCCESS,
  RESET_VENDOR_PASSWORD_FAIL,
  VENDOR_PROFILE_UPDATE_SUCCESS,
  VENDOR_PROFILE_UPDATE_FAIL,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL
  
} from "./ActionTypes";
import { toast } from "react-toastify";


// VENDOR SIGNUP ACTION
export const registerVendor = (data,  setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("vendor/signup", data);
    dispatch({
      type: VENDOR_REGISTER_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false);
    toast.success(res.data.message)
  } catch (error) {
    toast.error(error.response.data.message);
    setLoadingStates(false);
    dispatch({
      type: VENDOR_REGISTER_FAIL,
      error: error.response,
    });
  }
};


export const vendorLogin = (data, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("vendor/login", data);
    dispatch({
      type: VENDOR_LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem('VendorId' , res.data.data.user._id);
    setLoadingStates(false)
    toast.success(res.data.message)
  } catch (error) {
    toast.error(error.response.data.message);
    setLoadingStates(false)
    dispatch({
      type: VENDOR_LOGIN_FAIL,
    });
  }
};



export const getVendorProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`vendor/profile/${id}`);
    dispatch({
      type: VENDOR_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.res.data.message)
    dispatch({
      type: VENDOR_PROFILE_FAIL,
    });
  }
};


export const updateVendorProfile = (id, data , setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.put( `vendor/update-info/${id}`, data);
    dispatch({
      type: VENDOR_PROFILE_UPDATE_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false);
    toast.success(res.data.message)
  } catch (error) {
    setLoadingStates(false);
    toast.error(error.res.data.message)
    dispatch({
      type: VENDOR_PROFILE_UPDATE_FAIL,
      error: error.message,
    });
  }
};



// FORGOT PASSWORD ACTION
export const resetVendorpassword = (data, userId, setLoadingStates) => async (dispatch) => {
  const body = JSON.stringify({ ...data, userId });
  try {
    const res = await axios.post("vendor/resetPassword", body);
    dispatch({
      type: RESET_VENDOR_PASSWORD_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    toast.error(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.res.data.message)
    dispatch({
      type: RESET_VENDOR_PASSWORD_FAIL,
    });
  }
};

export const sendVendorOTP = (email, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("vendor/send-otp", email);
    dispatch({
      type: SEND_VENDOR_OTP_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    toast.error(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.res.data.message)
    dispatch({
      type: SEND_VENDOR_OTP_FAIL,
    });
  }
};

export const resendVendorOTP = (data, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("vendor/resend-otp", data);
    dispatch({
      type: RESEND_VENDOR_OTP_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    toast.error(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.res.data.message)
    dispatch({
      type: RESEND_VENDOR_OTP_FAIL,
    });
  }
};

export const verifyVendorOTP = (otp, userId, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("vendor/verify-otp", { otp, userId });
    dispatch({
      type: VERIFY_VENDOR_OTP_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    toast.error(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.res.data.message)
    dispatch({
      type: VERIFY_VENDOR_OTP_FAIL,
    });
  }
};


export const createPost = (data, setLoadingStates) => async (dispatch) => {
  try {
    const res = await axios.post("/create-BookingDetails", data);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: res.data,
    });
    setLoadingStates(false)
    toast.error(res.data.message)
  } catch (error) {
    setLoadingStates(false)
    toast.error(error.res.data.message)
    dispatch({
      type: CREATE_POST_FAIL,
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