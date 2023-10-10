import axios from "../../utils/axios";
import { getTokenIncludedConfig } from "./common";
import {  PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAIL} from "../constants";

export const changePassword = () => async (dispatch) => {
  try {
    const res = await axios.get("users/calculations", getTokenIncludedConfig());
    dispatch({
      type: PASSWORD_CHANGE_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_CHANGE_FAIL,
    });
  }
};
