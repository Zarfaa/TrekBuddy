
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  RESET_SUCCESS,
  RESET_FAIL,
  TOKEN_EXPIRE,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
   MAKE_ADMIN_SUCCESS,
  MAKE_ADMIN_FAIL,
} from "../Actions/index";

const initialState = {
  access: null,
  loading: false,
  isAuthenticated: false,
  isAdmin: false,
  isReset: false,
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
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

    case LOGIN_FAIL:
    case PROFILE_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTHENTICATE_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
        user: null,
        access: null,
      };
    case TOKEN_EXPIRE:
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
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
