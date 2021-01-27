import {SET_TEST_STATE} from "../types";


export const testReducer:any = (
  state = "initial",
  action: any
) => {
  switch (action.type) {
    case SET_TEST_STATE:
      return action.message;
    default:
      return state;
  }
}

