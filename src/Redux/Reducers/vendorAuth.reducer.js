import {
  VENDOR_REGISTER_SUCCESS,
  VENDOR_REGISTER_FAIL,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_LOGIN_FAIL,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL,
  LOGOUT_SUCCESS,
} from "../Actions/index";

const Vendor = {
  access: null,
  loading: false,
  isVendorAuthenticated: false,
  isReset: false,
  vendor: null,
};

const AuthReducer = (state = Vendor, action) => {
  const { type, payload } = action;

  switch (type) {
    case VENDOR_REGISTER_SUCCESS:
    case AUTHENTICATE_SUCCESS:
      case VENDOR_LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access_token);
      return {
        ...state,
        isVendorAuthenticated: true,
      };
   
    case  VENDOR_REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      case VENDOR_LOGIN_FAIL:
    case AUTHENTICATE_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        isVendorAuthenticated: false,
        vendor: null,
        access: null,
      };

   
    default:
      return state;
  }
};

export default AuthReducer;
