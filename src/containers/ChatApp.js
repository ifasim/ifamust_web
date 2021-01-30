import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import "./ChatApp.css";
import Sidebar from "./Sidebar";
import RightPanel from "./RightPanel";
import Chat from "./Chat";


import { useSelector } from 'react-redux';

import { selectUser} from '../store/reducers/user';
import { authAxios } from "../utils";

import { userIDURL } from "../constants";


function ChatApp() {

  const user = useSelector(selectUser);
  const [userInfo, setUserInfo] = useState({});
  const [error, seterror] = useState({});
  const userData = user || userInfo

  useEffect(() => {
    //get user details from dja
    if (user == null) {
        authAxios
        .get(userIDURL)
        .then(res => {
           setUserInfo(res.data)
           console.log("insideRight_panel: ", res.data)
        })
        .catch(err => {
            seterror(err)
        });
    }else {
        authAxios
        .post(userIDURL, user)
        .then(res => {
        console.log('setting user info...')
        })
        .catch(err => {
            console.log(err)
        });

    }

    }, []);

  return (
    <div className="player">
      <div className="player__body">
      <Sidebar />
      <Chat />
      <RightPanel user={userData} />

       
        
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ChatApp;
