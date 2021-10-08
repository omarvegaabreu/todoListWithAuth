import { SET_ALERT, REMOVE_ALERT } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      console.log(action.payload.id);
      return state.filter((alert) => alert.id !== action.payload.id); // add later to compare
    default:
      return state;
  }
};
