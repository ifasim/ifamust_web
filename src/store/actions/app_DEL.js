import { SET_CHANNEL_INFO } from "./actionTypes";
import { authAxios } from "../../utils";
import { orderSummaryURL } from "../../constants";

export const cartStart = () => {
  return {
    type: SET_CHANNEL_INFO
  };
};

export const setChannelInfo = data => {
  return {
    type: SET_CHANNEL_INFO,
    data
  };
};

export const fetchChannel = (channel) => {
  return dispatch => {
    dispatch(cartStart());

    const id =  channel.channelId
    const name =  channel.channelName

    


    dispatch(setChannelInfo(id));

    // authAxios
    //   .get(orderSummaryURL)
    //   .then(res => {
    //     dispatch(setChannelInfo(res.data));
    //   })
    //   .catch(err => {
    //     dispatch(cartFail(err));
    //   });
  };
};
