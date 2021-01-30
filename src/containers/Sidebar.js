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
// import { useStateValue } from "./StateProvider";
import { useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';
import db, { auth } from '../firebase'
import { accessUrl } from "./spotify";

import { userIDURL } from "../constants";
import { authAxios } from "../utils";





function Sidebar() {
//redux 
const user = 'useSelector(selectUser)';
// const user = useSelector(selectUser);

const [channels, setChannels] = useState([]);
const [userInfo, setUserInfo] = useState({});
const [admin, setAdmin] = useState("");
const admin_temp = "OAfTeyMi6sPYJLGvqN8VdDbOZ083"


useEffect(() => {
  //get user details from django


  authAxios
  .get(userIDURL)
  .then(res => {
     setUserInfo(res.data)
  })
  .catch(err => {
      console.log(err)
  });


}, []);
  
useEffect(() => {
  db.collection('channels').onSnapshot(snapshot => (
    setChannels(snapshot.docs.map(doc => ({
      id: doc.id,
      channel: doc.data(),
    })))
  ))
}, [])

// const [{ playlists }, dispatch] = useStateValue();
// const [{ playlists }, dispatch] = '';
const playlists = []

const handleAddChannel = () => {
  const channelName = prompt("Enter a new Channel name");
  console.log('user pop')

  if (channelName) {
    if (admin != "") {
      db.collection('channels').add({
        channelName: channelName,
        photo: userInfo.photo,
        members: [admin]
      })
    } else {
      db.collection('channels').add({
        channelName: channelName,
        photo: userInfo.photo,
        members: [userInfo.uid]
      })

    }
   
  }
};

return (
  <div className="sidebar">
    {/* <img
      className="sidebar__logo"
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt=""
    /> */}
   
{/* 
    <SidebarOption Icon={HomeIcon} option="Home" />
    <SidebarOption Icon={SearchIcon} option="Search" />
    <SidebarOption Icon={SubjectIcon} option="Feeds" /> */}


    {/* <SidebarOption Icon={QueueMusicIcon} option="Your Library" /> */}
    <div onClick={handleAddChannel}>
    <SidebarOption Icon={AddCommentIcon} option="+ New Chat" />
    </div>

    {/* <div >
      <a href={accessUrl}>
    <SidebarOption Icon={WifiTetheringIcon} option="Conect Spotify" />
    </a>
    </div> */}

    {/* <br />

    <div onClick={() => auth.signOut()}>
    <SidebarOption Icon={PowerSettingsNewIcon} option="Logout" />
    </div> */}



    <br />

    <div className='sidebar__top'>
      <h3>Messages</h3>
      <ExpandMoreIcon />
    </div>

    <div className="sidebar__channelsList">

        {channels.map(({ id, channel}) => (
         <React.Fragment>
         
           {channel &&(
             <React.Fragment>

               {/* include only chat user creates/part of */}
                 {channel.members.includes(userInfo.uid) &&(
                   console.log("adding..........____user"),

                    <SidebarChannel key={id} id={id} channelName= {channel.channelName} avatar={channel.photo} />

                )}
                    {/* include chats from admin */}
                { channel.members.includes(admin_temp) &&(
                   console.log("adding..........____admin"),

                    <SidebarChannel key={id} id={id} channelName= {channel.channelName} avatar={channel.photo} />

                )}
             </React.Fragment>
           )}  
         </React.Fragment>
            
        ))}

      </div>

    </div>
  );
}

export default Sidebar;
