import { combineReducers } from "redux";
import vendorReducer from "./vendorAuth.reducer";
import userReducer from "./userAuth.reducer";

const rootReducer = combineReducers({
  vendorAuth: vendorReducer,
  userAuth : userReducer 
});

export default rootReducer;
