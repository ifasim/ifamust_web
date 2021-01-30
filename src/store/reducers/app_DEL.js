import {  SET_CHANNEL_INFO } from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  channelId: null,
  channelName: null,
};

const setChannelInfo = (state, action) => {
  console.log('this set: ', action.data)
  
  return updateObject(state, {
    channelId: action.data,
    channelName: action.data
  });
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNEL_INFO:
      return setChannelInfo(state, action);
    default:
      return state;
  }
};

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default reducer;
