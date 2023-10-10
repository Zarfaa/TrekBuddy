import {
    SEND_OTP_SUCCESS,
    VERIFY_OTP_SUCCESS,
    RESEND_OTP_SUCCESS,
    RESET_SUCCESS,
    RESEND_OTP_FAIL,
    RESET_FAIL,
    SEND_OTP_FAIL,
    VERIFY_OTP_FAIL,
} from "../Actions/index";

const initialstate = {
    access: null,
    isReset: false,
    user: null,
};

const OTPReducer = (state = initialstate, action) => {
    const { type, payload } = action;

    switch (type) {
       case SEND_OTP_SUCCESS:
       case VERIFY_OTP_SUCCESS:
       case RESEND_OTP_SUCCESS:
            localStorage.setItem("access", payload.access_token);
            return {
                ...state,
                access: payload.access_token,  
            };

            case RESET_FAIL:
                return {
                  ...state,
                  isReset: payload,
                };

                case RESET_SUCCESS:
                    return {
                      ...state,
                      isReset: payload,
                    };

           case RESEND_OTP_FAIL:
            case SEND_OTP_FAIL:
           case  VERIFY_OTP_FAIL:
            localStorage.removeItem("access");
            return {
                ...state,
                user: null,
                access: null,
            };


        default:
            return state;
    }
};

export default OTPReducer;
