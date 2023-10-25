import axios from "../../utils/axios";
import {
  VENDOR_LOGIN_FAIL,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_REGISTER_SUCCESS,
  VENDOR_REGISTER_FAIL,
  RESEND_VENDOR_OTP_SUCCESS,
  RESEND_VENDOR_OTP_FAIL,
  RESET_VENDOR_PASSWORD_SUCCESS,
  RESET_VENDOR_PASSWORD_FAIL,
  SEND_VENDOR_OTP_FAIL,
  SEND_VENDOR_OTP_SUCCESS,
  VERIFY_VENDOR_OTP_SUCCESS,
  VERIFY_VENDOR_OTP_FAIL,
  VENDOR_PROFILE_SUCCESS,
  VENDOR_PROFILE_FAIL,
  LOGOUT_SUCCESS
} from "./ActionTypes";

import {getTokenIncludedConfig} from "./common"


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
}
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



export const getVendorProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get("users/me/", getTokenIncludedConfig());
    dispatch({
      type: VENDOR_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: VENDOR_PROFILE_FAIL,
    });
  }
};



export const resetVendorPassword = (email) => async (dispatch) => {
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post("/resetPassword", body);
    dispatch({
      type: RESET_VENDOR_PASSWORD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RESET_VENDOR_PASSWORD_FAIL,
    });
  }
};

export const sendVendorOTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("vendor/send-otp", body);
      dispatch({
        type: SEND_VENDOR_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEND_VENDOR_OTP_FAIL,
      });
    }
  };

export const verifyVendorOTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("vendor/resend-otp", body);
      dispatch({
        type: VERIFY_VENDOR_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: VERIFY_VENDOR_OTP_FAIL,
      });
    }
  };


  export const resendVendorOTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("/resend-otp", body);
      dispatch({
        type: RESEND_VENDOR_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type:  RESEND_VENDOR_OTP_FAIL,
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

