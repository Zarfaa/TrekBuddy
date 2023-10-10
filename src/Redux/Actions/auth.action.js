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
  SEND_OTP_SUCCESS,
  VERIFY_OTP_SUCCESS,
  RESEND_OTP_SUCCESS,
  RESET_SUCCESS,
  RESEND_OTP_FAIL,
  RESET_FAIL,
  SEND_OTP_FAIL,
  VERIFY_OTP_FAIL,
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
export const reset_password = (email) => async (dispatch) => {
  const body = JSON.stringify({ email });
  try {
    const res = await axios.post("/resetPassword", body);
    dispatch({
      type: RESET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RESET_FAIL,
    });
  }
};

export const verify_OTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("/resend-otp", body);
      dispatch({
        type: VERIFY_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: VERIFY_OTP_FAIL,
      });
    }
  };

  export const send_OTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("/send-otp", body);
      dispatch({
        type: SEND_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SEND_OTP_FAIL,
      });
    }
  };

  export const resend_OTP = (data) => async (dispatch) => {
    const body = JSON.stringify({ data});
    try {
      const res = await axios.post("/resend-otp", body);
      dispatch({
        type: RESEND_OTP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: RESEND_OTP_FAIL,
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