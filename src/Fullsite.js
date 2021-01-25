import React from "react";
import Footer from "./Footer";
import "./Fullsite.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Chat from "./Chat";


function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Chat />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
