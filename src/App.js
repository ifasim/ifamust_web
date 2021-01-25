import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Fullsite from "./Fullsite";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";
import Home from "./Home.js";
import { selectUser } from './features/userSlice';
import { auth } from './firebase'
import { login, logout } from './features/userSlice';



function App() {

  //redux layer 
  const dispatch_redux = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
     
      if (authUser) {
        //login user 
        dispatch_redux(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })
      );
      } else {
        //logout user
        dispatch_redux(logout());
      }
    });
  }, [dispatch_redux])

  ///////// redux layer ////////


  return (
    <div className="app">
     {user ? (
       <Fullsite/>
     ) : (
      <Home />
     )} 
    </div>
  );
}

export default App;
