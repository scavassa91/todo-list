import * as constants from "./constants";
import { Auth } from "../../interfaces/Auth";
import { action } from "../../interfaces/action";

export default function (state = constants.INITIAL_STATE, action: action): Auth {
  switch (action.type) {
    case constants.tokenLoading:
      return {
        ...state,
        isLoginRunning: action.payload,
      }
    case constants.tokenFinish:
      return {
        ...state,
        token: action.payload,
        isLoged: true
      }
    case constants.tokenError:
      return constants.INITIAL_STATE;
    case constants.logoutLoading:
      return {
        ...state,
        isLogoutRunning: action.payload
      }
    case constants.tokenError:
      return {
        ...state,
        isLoged: false
      }
    default:
      return state;
  }
}