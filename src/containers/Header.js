import React from "react";
import "./Header.css";
// import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

function Header({ user }) {
  // const [{ user }, dispatch] = useStateValue();
  // const [{ user }, dispatch] = 'useStateValue()';


  return (
    <div className="header">
      {/* <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div> */}
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.photo } />
        <h4>{user?.displayName}</h4>
      </div>
    </div>
  );
}

export default Header;
