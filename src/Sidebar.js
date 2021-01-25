import React, {useState, useEffect} from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel"
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SubjectIcon from '@material-ui/icons/Subject';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AddIcon from '@material-ui/icons/Add';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase'
import { accessUrl } from "./spotify";


function Sidebar() {
//redux 
const user = useSelector(selectUser);
const [channels, setChannels] = useState([]);
  
useEffect(() => {
  db.collection('channels').onSnapshot(snapshot => (
    setChannels(snapshot.docs.map(doc => ({
      id: doc.id,
      channel: doc.data(),
    })))
  ))
}, [])

const [{ playlists }, dispatch] = useStateValue();

const handleAddChannel = () => {
  const channelName = prompt("Enter a new Channel name");
  console.log('user pop')

  if (channelName) {
    db.collection('channels').add({
      channelName: channelName,
    })
  }
};

return (
  <div className="sidebar">
    {/* <img
      className="sidebar__logo"
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt=""
    /> */}
    <h1>IFATRADER</h1>

    <SidebarOption Icon={HomeIcon} option="Home" />
    <SidebarOption Icon={SearchIcon} option="Search" />
    <SidebarOption Icon={SubjectIcon} option="Feeds" />
    <SidebarOption Icon={QueueMusicIcon} option="Your Library" />
    <div onClick={handleAddChannel}>
    <SidebarOption Icon={AddCommentIcon} option="+ Channel" />
    </div>

    <div >
      <a href={accessUrl}>
    <SidebarOption Icon={WifiTetheringIcon} option="Conect Spotify" />
    </a>
    </div>

    <br />

    <div onClick={() => auth.signOut()}>
    <SidebarOption Icon={PowerSettingsNewIcon} option="Logout" />
    </div>



    <br />

    <div className='sidebar__top'>
      <h3>Music Rooms</h3>
      <ExpandMoreIcon />
    </div>

    <div className='sidebar__channels'>
      <div className='sidebar__channelsHeader'>
        <div className='sidebar__header'>
          <ExpandMoreIcon />
          <h4>Text Channels</h4>

          <AddIcon onclick={handleAddChannel} className='sidebar__addChannel' />
        </div> 
        
      </div>
      <div className="sidebar__channelsList">

        {channels.map(({ id, channel }) => (
            <SidebarChannel key={id} id={id} channelName= {channel.channelName} />
        ))}

      </div>


      <div>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />
          {playlists?.items?.map((playlist) => (
            <SidebarOption option={playlist.name} />
          ))}
      </div> 

    </div>

    </div>
  );
}

export default Sidebar;
