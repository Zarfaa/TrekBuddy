import { PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAIL} from "../constants";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const UseAccount = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
      
    case PASSWORD_CHANGE_FAIL:
      
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default UseAccount;
