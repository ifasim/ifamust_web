import {  USER_INFO } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    user: null,
};

const fetchUser = (state, action) => {
 
  return updateObject(state, {
    user: action.data,
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return fetchUser(state, action);
    default:
      return state;
  }
};


export const selectUser = (state) => state.user.user;

export default reducer;