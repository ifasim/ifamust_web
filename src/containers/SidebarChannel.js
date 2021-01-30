import React from 'react'
import './SidebarChannel.css'
import { connect } from "react-redux";

// import { useDispatch } from 'react-redux'
// import { setChannelInfo } from './features/appSlice'
// import { fetchChannel } from "../store/actions/user";
import { fetchChannel } from "../store/actions/channel";
import { Avatar } from '@material-ui/core';





// function SidebarChannel({id, channelName}) {

class SidebarChannel extends React.Component {
    

    fetchChannelInfo = () => {
      const channel = {
        channelId: this.props.id,
        channelName: this.props.channelName,
    }
       
        this.props.channel(channel)
    }

    render() {
    return (
        <div className='sidebarChannel' onClick={this.fetchChannelInfo}>
            <h4>
                <span className="sidebarChannel__hash"> <Avatar src={this.props.avatar} /> </span> 
                {this.props.channelName}
            </h4>
        </div>
    )
}
}
  const mapDispatchToProps = (dispatch) => {
    return {
      channel: (channel) => dispatch(fetchChannel(channel))
    };
  };

// export default SidebarChannel

export default connect(
    null,
    mapDispatchToProps
  )(SidebarChannel);




