import {  CHANNEL_INFO } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    channel: null,
};

const fetchChannel = (state, action) => {
  console.log('channel...',action.data)
  return updateObject(state, {

    channel: action.data,
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANNEL_INFO:
      return fetchChannel(state, action);
    default:
      return state;
  }
};


export const selectChannel = (state) => state.app.channel;

export default reducer;