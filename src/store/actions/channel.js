import { CHANNEL_INFO } from "./actionTypes";


export const channelStart = () => {
  return {
    type: CHANNEL_INFO
  };
};

export const setChannelInfo = data => {
  return {
    type: CHANNEL_INFO,
    data
  };
};

export const fetchChannel = (channel) => {
  return dispatch => {
    dispatch(channelStart());

    dispatch(setChannelInfo(channel));
  };
};
