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
  USER_PROFILE_UPDATE_FAIL,
} from "../Actions/ActionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
  isUserAuthenticated: false,
  isSuccess: false,
  isVerified: false,
  passwordSuccess: false,
  currentStep: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_SUCCESS:
    case USER_PROFILE_UPDATE_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isUserAuthenticated: true,
        data: payload,
      };

    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        isUserAuthenticated: true,
        data: payload.data,
      };

    case RESET_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        data: payload,
        passwordSuccess: true
      };

    case USER_REGISTER_FAIL:
    case RESET_USER_PASSWORD_FAIL:
    case USER_PROFILE_UPDATE_FAIL:
    case USER_LOGIN_FAIL:
    case USER_PROFILE_FAIL:
      return {
        ...state,
        data: null,
        error: payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        data: null,
        error: payload,
        isUserAuthenticated: false,
      };


    case SEND_USER_OTP_SUCCESS:
    case RESEND_USER_OTP_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        access: payload.access_token,
        data: payload,
        currentStep: 'sendOTP',
      };

    case VERIFY_USER_OTP_SUCCESS:
      return {
        ...state,
        isVerified: true,
        access: payload.access_token,
        data: payload,
        currentStep: 'verifyOTP',
      };


    case RESEND_USER_OTP_FAIL:
    case SEND_USER_OTP_FAIL:
      return {
        ...state,
        data: null,
        isSuccess: false
      };

    case VERIFY_USER_OTP_FAIL:
      return {
        ...state,
        data: null,
        isVerified: false
      };

    default:
      return state;
  }
};

export default userReducer;
