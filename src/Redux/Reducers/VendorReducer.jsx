import {
  VENDOR_REGISTER_SUCCESS,
  VENDOR_REGISTER_FAIL,
  VENDOR_LOGIN_SUCCESS,
  VENDOR_LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SEND_VENDOR_OTP_SUCCESS,
  SEND_VENDOR_OTP_FAIL,
  VERIFY_VENDOR_OTP_SUCCESS,
  VERIFY_VENDOR_OTP_FAIL,
  RESEND_VENDOR_OTP_SUCCESS,
  RESEND_VENDOR_OTP_FAIL,
  VENDOR_PROFILE_SUCCESS,
  VENDOR_PROFILE_FAIL,
  VENDOR_PROFILE_UPDATE_SUCCESS,
  VENDOR_PROFILE_UPDATE_FAIL,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL
} from "../Actions/ActionTypes";

const Vendor = {
  data:[],
  access: null,
  loading: false,
  isVendorAuthenticated: false,
  isReset: false,
  vendor: null,
  isVerified: false
};

const VendorReducer = (state = Vendor, action) => {
  const { type, payload } = action;

  switch (type) {
    case VENDOR_REGISTER_SUCCESS:
    case VENDOR_LOGIN_SUCCESS:
      case CREATE_POST_SUCCESS:
    case VENDOR_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        isVendorAuthenticated: true,
        data:payload
      };

      case VENDOR_PROFILE_SUCCESS:
          return {
            ...state,
            isVendorAuthenticated: true,
            data: payload.data
          };
    

    case VENDOR_REGISTER_FAIL:
    case VENDOR_LOGIN_FAIL:
    case VENDOR_PROFILE_FAIL:
    case VENDOR_PROFILE_UPDATE_FAIL:
    case CREATE_POST_FAIL:
      return {
        ...state,
        isVendorAuthenticated: false,
        vendor: null,
        error: payload
      };

    

      case LOGOUT_SUCCESS:
        return {
          ...state,
          data: null,
          error: payload,
          isVendorAuthenticated: false,
        };


    case SEND_VENDOR_OTP_SUCCESS:
    case RESEND_VENDOR_OTP_SUCCESS:
      localStorage.setItem("access", payload.access_token);
      return {
        ...state,
        isSuccess: true,
        access: payload.access_token,
        data: payload
      };
    case VERIFY_VENDOR_OTP_SUCCESS:
      localStorage.setItem("access", payload.access_token);
      return {
        ...state,
        isVerified: true,
        access: payload.access_token,
        data: payload
      };


    case RESEND_VENDOR_OTP_FAIL:
    case SEND_VENDOR_OTP_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        data: null,
        isSuccess: false
      };

    case VERIFY_VENDOR_OTP_FAIL:
      localStorage.removeItem("access");
      return {
        ...state,
        data: null,
        isVerified: false
      };

    default:
      return state;
  }
};

export default VendorReducer;
