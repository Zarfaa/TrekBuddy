import { combineReducers } from "redux";
import vendorReducer from "./VendorReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  Vendor : vendorReducer,
  User : userReducer ,
});

export default rootReducer;
