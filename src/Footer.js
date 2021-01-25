import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";

function Footer({ spotify }) {
 

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src=''
          alt=''
        />
       
          <div className="footer__songInfo">
            <h4>'sample'</h4>
            <p>'sample small'</p>
          </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
       
          <PauseCircleOutlineIcon
            
            fontSize="large"
            className="footer__icon"
          />
       
          <PlayCircleOutlineIcon
           
            fontSize="large"
            className="footer__icon"
          />
       
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid >
            <PlaylistPlayIcon />
          </Grid>
          <Grid >
            <VolumeDownIcon />
          </Grid>
          <Grid  xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
