
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  VENDOR_REGISTER_SUCCESS,
  VENDOR_REGISTER_FAIL,
  LOGOUT_SUCCESS,
  RESET_SUCCESS,
  RESET_FAIL,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
} from "../Actions/index";

const initialState = {
  access: null,
  loading: false,
  isAuthenticated: false,
  isReset: false,
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VENDOR_REGISTER_SUCCESS:
    case USER_REGISTER_SUCCESS:
    case AUTHENTICATE_SUCCESS:
      localStorage.setItem("access", payload.access_token);
      return {
        ...state,
        isAuthenticated: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        isReset: payload,
      };

    case PROFILE_FAIL:
    case  VENDOR_REGISTER_FAIL:
    case   USER_REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTHENTICATE_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        access: null,
      };

    case RESET_FAIL:
      return {
        ...state,
        isReset: payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
