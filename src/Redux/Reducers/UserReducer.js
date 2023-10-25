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
} from "../Actions/ActionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
  isUserAuthenticated: false,
  isSuccess: false
};

const userAccount = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
    case USER_PROFILE_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case RESET_USER_PASSWORD_SUCCESS:
      localStorage.setItem("access", payload.access_token);
      return {
        ...state,
        isUserAuthenticated: true,
        data: payload,
      };

    case USER_REGISTER_FAIL:
    case RESET_USER_PASSWORD_FAIL:
    case USER_LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case USER_PROFILE_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        isUserAuthenticated: false,
        data: null,
        error: payload,
      };


    case SEND_USER_OTP_SUCCESS:
    case VERIFY_USER_OTP_SUCCESS:
    case RESEND_USER_OTP_SUCCESS:
      localStorage.setItem("access", payload.access_token);
      return {
        ...state,
        isSuccess: true,
        access: payload.access_token,
        data: payload
      };

    case RESEND_USER_OTP_FAIL:
    case SEND_USER_OTP_FAIL:
    case VERIFY_USER_OTP_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        data: null,
        isSuccess: false
      };
    default:
      return state;
  }
};

export default userAccount;
