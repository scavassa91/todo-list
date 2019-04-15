import * as constants from "./constants";
import { Auth } from "../../interfaces/Auth";
import { action } from "../../interfaces/action";

export default function (state = constants.INITIAL_STATE, action: action): Auth {
  switch (action.type) {
    case constants.tokenLoading:
      return {
        ...state,
        isLoginRunning: action.payload,
      };
    case constants.tokenFinish:
      return {
        ...state,
        token: action.payload,
        isLoged: true
      };
    case constants.tokenError:
    case constants.refreshTokenError:
    case constants.logoutFinish:
      return constants.INITIAL_STATE;
    case constants.logoutLoading:
      return {
        ...state,
        isLogoutRunning: action.payload
      };
    case constants.refreshTokenFinish:
      return {
        ...state,
        token: action.payload,
        isLoged: true
      };
    default:
      return state;
  }
}