import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // the bellow line tells wether the a user exist or not and a boolean is returned
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
};
