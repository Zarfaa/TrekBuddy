
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  LOGOUT_SUCCESS,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
} from "../Actions/index";

const User = {
  access: null,
  loading: false,
  isUserAuthenticated: false,
  isReset: false,
  user: null,
};


const AuthReducer = (state = User, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
    case AUTHENTICATE_SUCCESS:
      localStorage.setItem("access", payload.access_token);
      return {
        ...state,
        isUserAuthenticated: true,
      };

    case   USER_REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTHENTICATE_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        isUserAuthenticated: false,
        user: null,
        access: null,
      };

    default:
      return state;
  }
};

export default AuthReducer;
