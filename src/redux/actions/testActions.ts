import {SET_TEST_STATE} from "../types";


export const testAction = (message: string) => {
  return{type: SET_TEST_STATE, message: message}
}