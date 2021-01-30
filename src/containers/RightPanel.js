import React from "react";
import "./RightPanel.css";
import Header from "./Header";
// import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function RightPanel({ spotify, user }) {
  // const [{ discover_weekly }, dispatch] = useStateValue();
  const [{ discover_weekly }, dispatch] = 'useStateValue()';
   

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:6bnfXsKx2VA8Mx8kheMuhj`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header user={user} />

      <div className="body__info">
      
        <div className="body__infoText">
          <strong>PREVIOUS</strong>
          <h2>ORDERS</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <h4>No Order History</h4>
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default RightPanel;