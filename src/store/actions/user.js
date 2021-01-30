import { USER_INFO } from "./actionTypes";


export const cartStart = () => {
  return {
    type: USER_INFO
  };
};

export const setUserInfo = data => {
  return {
    type: USER_INFO,
    data
  };
};

export const fetchUser = (user) => {
  return dispatch => {
    dispatch(cartStart());

    dispatch(setUserInfo(user));
  };
};
